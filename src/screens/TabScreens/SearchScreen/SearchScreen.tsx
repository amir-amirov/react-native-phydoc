import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../../theme';
//   import RightArrowLarge from '../../assets/icons/RightArriwLarge';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const data = [
  {
    id: '1',
    speciality: 'Терапевт',
    desc: 'Специалист по общей медицине, предоставляет первичную медицинскую помощь.',
  },
  {
    id: '2',
    speciality: 'Педиатр',
    desc: 'Врачи, специализирующиеся на детском здоровье и развитии.',
  },
  {
    id: '3',
    speciality: 'Оториноларинголог (ЛОР)',
    desc: 'Специалисты по болезням уха, горла и носа.',
  },
  {
    id: '4',
    speciality: 'Гинеколог',
    desc: 'Специалист по женскому репродуктивному здоровью.',
  },
];

type ItemData = {
  id: string;
  speciality: string;
  desc: string;
};

const SearchScreen = () => {
  const navigation = useNavigation<any>();

  const tabBarHeight = useBottomTabBarHeight();

  const headerComponent = () => {
    return (
      <View
        style={{
          borderRadius: 12,
          padding: 16,
          gap: 12,
          backgroundColor: theme.palette.primaryBrand[100],
          marginBottom: 16,
        }}>
        <Text
          style={[
            theme.typography.header.h3,
            {color: theme.palette.gray[700]},
          ]}>
          Не знаете кто вам нужен?
        </Text>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}>
          Виртуальный ассистент направит вас на нужного специалиста
        </Text>
        <TouchableOpacity
          style={{
            width: '23.5%',
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 16,
            backgroundColor: theme.palette.white.base,
          }}>
          <Text
            style={[
              theme.typography.text.medium16,
              {color: theme.palette.gray[700]},
            ]}>
            Скоро
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <View
        style={{
          padding: 16,
          gap: 16,
          borderRadius: 12,
          backgroundColor: theme.palette.gray[200],
          marginBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{maxWidth: '80%'}}>
          <Text
            style={[
              theme.typography.text.bold16,
              {color: theme.palette.gray[700]},
            ]}>
            {item.speciality}
          </Text>
          <Text
            style={[
              theme.typography.text.regular14,
              {color: theme.palette.gray[600], lineHeight: 17.85},
            ]}>
            {item.desc}
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* <RightArrowLarge /> */}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.palette.white.base,
        marginBottom: tabBarHeight,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.palette.white.base}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View style={{flex: 1, margin: 0, padding: 0}}>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <Text
              style={[
                theme.typography.header.h1,
                {color: theme.palette.black.base},
              ]}>
              Поиск
            </Text>
          </View>

          <View style={{flex: 1, marginHorizontal: 20}}>
            <TextInput
              placeholder="Введите имя или специализацию"
              placeholderTextColor={theme.palette.gray[600]}
              style={[
                {
                  marginVertical: 20,
                  padding: 16,
                  backgroundColor: theme.palette.white.base,
                  borderWidth: 2,
                  borderColor: theme.palette.gray[400],
                  borderRadius: 12,
                },
                theme.typography.text.regular16,
              ]}
            />

            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={headerComponent}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
