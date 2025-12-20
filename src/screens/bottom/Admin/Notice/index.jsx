import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
import styles from './style';
import CustomButton from '../../../../components/CustomButton';

const Notice = () => {
  const navigation = useNavigation();

  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const previousNotices = [
    {
      id: 1,
      topic: 'Holiday Announcement',
      description: 'School will remain closed on Friday due to maintenance.',
      date: '12 Dec 2025',
    },
    {
      id: 2,
      topic: 'PTM Notice',
      description: 'Parent Teacher Meeting will be held on Saturday.',
      date: '08 Dec 2025',
    },
  ];

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Notice" onBackPress={() => navigation.goBack()} />
      <View style={[globalStyle.whitecontainer2]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          <CustomTextInput
            label="Topic"
            placeholder="Enter notice topic"
            value={topic}
            onChangeText={setTopic}
          />

          <CustomTextInput
            label="Description"
            placeholder="Enter notice description"
            value={description}
            onChangeText={setDescription}
            numberOfLines={5}
            multiline
            style={{ height: 100, textAlignVertical: 'top' }}
          />

          <CustomButton title="Send Notice" style={{ marginTop: 25 }} />

          <Text style={[globalStyle.font16BoldB, { marginTop: 20 }]}>
            Previous Notices
          </Text>

          {previousNotices.length === 0 ? (
            <Text
              style={[
                globalStyle.font14Medium,
                { textAlign: 'center', marginTop: 10 },
              ]}
            >
              No notices found
            </Text>
          ) : (
            previousNotices.map(item => (
              <View key={item.id} style={styles.noticeCard}>
                <View style={styles.noticeHeader}>
                  <Text style={globalStyle.font14BoldB}>{item.topic}</Text>
                  <Text style={globalStyle.font12ItalicB}>{item.date}</Text>
                </View>

                <Text style={[globalStyle.font14Medium, { marginTop: 6 }]}>
                  {item.description}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Notice;
