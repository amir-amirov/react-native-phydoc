import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {API_URL} from '@env';
import {styles} from './styles';

const Slots = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [slotsByDay, setSlotsByDay] = useState({});

  const [daysToShow, setDaysToShow] = useState(2);

  const toggleDaysToShow = () => {
    daysToShow === 2
      ? setDaysToShow(Object.keys(slotsByDay).length)
      : setDaysToShow(2);
  };

  const groupSlotsByDay = (slots: any) => {
    const grouped: any = {};
    slots.forEach((slot: any) => {
      const dateTime = new Date(slot.datetime);
      const date = format(dateTime, 'd MMMM, EEEE', {locale: ru});

      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(slot);
    });

    return grouped;
  };

  const fetchSchedule = async (type: string) => {
    const url = `${API_URL}/get_schedule?type=${type}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const slots = await response.json();
      console.log('These are slots:', slots);

      const groupedSlots = groupSlotsByDay(slots.slots);
      console.log('These are grouped slots:', groupedSlots);

      setSlotsByDay(groupedSlots);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchSchedule('offline');
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          {slotsByDay &&
            Object.keys(slotsByDay)
              .slice(0, daysToShow)
              .map((day, i) => (
                <View key={i} style={styles.DateAndSlots}>
                  <Text style={styles.day}>{day}</Text>
                  <View style={styles.slots}>
                    {slotsByDay[day].map((slot: any) => {
                      const dateTime = new Date(slot.datetime);
                      const time = dateTime.toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      });
                      return (
                        <Pressable
                          key={slot.id}
                          style={
                            slot.id === selectedIndex
                              ? styles.slotFocused
                              : styles.slotUnFocused
                          }
                          onPress={() => setSelectedIndex(slot.id)}>
                          <Text
                            style={
                              slot.id === selectedIndex
                                ? styles.slotTimeFocused
                                : styles.slotTimeUnFocused
                            }>
                            {time}
                          </Text>
                          <Text
                            style={
                              slot.id === selectedIndex
                                ? styles.slotPriceFocused
                                : styles.slotPriceUnFocused
                            }>
                            {slot.price}₸
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              ))}
        </View>
        <TouchableOpacity
          style={styles.expandButton}
          onPress={() => toggleDaysToShow()}>
          <Text style={styles.expandButtonText}>
            {daysToShow === 2 ? 'Показать еще' : 'Свернуть'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Slots;
