import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from '../../../../utils/globalStyle';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import styles from './style';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
const ClassManagementVPPrincipal = ({ route }) => {
  const navigation = useNavigation();
  const role = route?.params?.role || 'viceprincipal';

  const commonCards = [
    // { title: 'View All Classes', icon: '📚', route: '' },
    // { title: 'Teacher Management', icon: '🧑‍🏫', route: '' },
    { title: 'Approve Leave Requests', icon: '✔️', route: 'LeaveApproval' },
    { title: 'Class Scedule', icon: '📊', route: 'ClassSchedule' },
    // { title: "Timetable Overview", icon: "⏰" },
  ];

  /** ------------------------------ */
  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate(item.route);
      }}
    >
      <Text style={styles.cardIcon}>{item.icon}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Class ManageMent"
        onBackPress={() => {
          navigation.goBack();
        }}
      />

      <View style={[globalStyle.whitecontainer2]}>
        <Text style={styles.roleTitle}>
          {role === 'principal'
            ? 'Principal Dashboard'
            : 'Vice Principal Dashboard'}
        </Text>

        <FlatList
          data={commonCards}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ marginTop: 20 }}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default ClassManagementVPPrincipal;
