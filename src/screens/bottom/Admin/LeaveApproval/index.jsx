import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../../../components/CustomHeader';
import globalStyle from '../../../../utils/globalStyle';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Images from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';

const LeaveApproval = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('pending');
  const [leaves, setLeaves] = useState([
    {
      id: '1',
      name: 'Suresh Yadav',
      type: 'Annual Leave',
      fromDate: '10 Sep',
      toDate: '12 Sep',
      reason: 'Family Function',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Ramesh Kumar',
      type: 'Sick Leave',
      fromDate: '5 Sep',
      toDate: '5 Sep',
      reason: 'Fever',
      status: 'approved',
    },
    {
      id: '3',
      name: 'Neha Sharma',
      type: 'Casual Leave',
      fromDate: '2 Sep',
      toDate: '3 Sep',
      reason: 'Personal work',
      status: 'rejected',
    },
  ]);

  /* -------- UPDATE STATUS -------- */
  const updateStatus = (id, status) => {
    setLeaves(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status } : item,
      ),
    );
  };

  /* -------- FILTER BY TAB -------- */
  const filteredLeaves = leaves.filter(item => {
    if (activeTab === 'pending') return item.status === 'pending';
    if (activeTab === 'accept') return item.status === 'approved';
    if (activeTab === 'reject') return item.status === 'rejected';
  });

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Leave Approval"
        onBackPress={() => navigation.goBack()}
      />

      <View style={globalStyle.whitecontainer2}>
        {/* -------- TABS (UNCHANGED) -------- */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={[styles.btn, activeTab === 'pending' && styles.activeBtn]}
            onPress={() => setActiveTab('pending')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'pending' && styles.activeText,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, activeTab === 'accept' && styles.activeBtn]}
            onPress={() => setActiveTab('accept')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'accept' && styles.activeText,
              ]}
            >
              Accept
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, activeTab === 'reject' && styles.activeBtn]}
            onPress={() => setActiveTab('reject')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'reject' && styles.activeText,
              ]}
            >
              Reject
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {filteredLeaves.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.9}
            >
              <Image
                source={Images.profile}
                style={{ height: 50, width: 50 }}
              />

              <View style={{ gap: 8 }}>
                <Text style={globalStyle.font18ItalicB}>{item.name}</Text>

                {activeTab === 'pending' && (
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <CustomButton
                      title="Approve"
                      textStyle={globalStyle.font12Bold}
                      style={{
                        paddingVertical: 8,
                        paddingHorizontal: 15,
                        backgroundColor: 'green',
                      }}
                      onPress={() =>
                        updateStatus(item.id, 'approved')
                      }
                    />
                    <CustomButton
                      title="Reject"
                      textStyle={globalStyle.font12Bold}
                      style={{
                        paddingVertical: 8,
                        paddingHorizontal: 15,
                        backgroundColor: 'red',
                      }}
                      onPress={() =>
                        updateStatus(item.id, 'rejected')
                      }
                    />
                  </View>
                )}
              </View>

              <View>
                <Text style={globalStyle.font14BoldB}>{item.type}</Text>
                <Text style={globalStyle.font12B}>
                  {item.fromDate} - {item.toDate}
                </Text>
                <Text style={globalStyle.font12B}>{item.reason}</Text>

                {activeTab !== 'pending' && (
                  <Text
                    style={[
                      globalStyle.font12Bold,
                      {
                        color:
                          item.status === 'approved'
                            ? 'green'
                            : 'red',
                        marginTop: 4,
                      },
                    ]}
                  >
                    {item.status.toUpperCase()}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default LeaveApproval;
