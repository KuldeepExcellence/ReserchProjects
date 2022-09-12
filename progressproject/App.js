import React from "react";
import { View, Text, ScrollView } from "react-native";
import CircularProgress, { ProgressRef } from 'react-native-circular-progress-indicator';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';



export default function App() {
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2
  };

  return (
    <ScrollView>
      <CircularProgress value={58} />
      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={200}
        title={'KM/H'}
        titleColor={'white'}
        titleStyle={{ fontWeight: 'bold' }}
      />
      <CircularProgress
        value={60}
        activeStrokeWidth={12}
        progressValueColor={'#ecf0f1'}
      />
      <CircularProgress
        value={90}
        valuePrefix={'$'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
      />

      <CircularProgress
        value={85}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        progressValueColor={'#fff'}
        valueSuffix={'%'}
      />
      <CircularProgress
        value={90}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        progressValueColor={'#fff'}
        valueSuffix={'%'}
        onAnimationComplete={() => { alert('callback') }}
      />
      <CircularProgress
        value={60}
        radius={120}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={'#f39c12'}
        inActiveStrokeColor={'#9b59b6'}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={20}
        activeStrokeWidth={40}
      />

      <CircularProgress
        value={60}
        radius={120}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={'#f39c12'}
        inActiveStrokeColor={'#9b59b6'}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={40}
        activeStrokeWidth={20}
      />

      <CircularProgress
        value={60}
        radius={120}
        inActiveStrokeOpacity={0.5}
        activeStrokeWidth={20}
        inActiveStrokeWidth={20}
        progressValueStyle={{ fontWeight: '100', color: 'yellow' }}
      />
      <CircularProgress
        value={0}
        radius={120}
        maxValue={10}
        initialValue={10}
        progressValueColor={'#fff'}
        activeStrokeWidth={15}
        inActiveStrokeWidth={15}
        duration={10000}
        onAnimationComplete={() => alert('time out')}
      />
      <CircularProgress
        value={80}
        activeStrokeColor={'#2465FD'}
        activeStrokeSecondaryColor={'#C25AFF'}
      />
      <CircularProgressBase
        {...props}
        value={80}
        radius={125}
        activeStrokeColor={'#e84118'}
        inActiveStrokeColor={'#e84118'}
      >
        <CircularProgressBase
          {...props}
          value={87}
          radius={100}
          activeStrokeColor={'#badc58'}
          inActiveStrokeColor={'#badc58'}
        >
          <CircularProgressBase
            {...props}
            value={62}
            radius={75}
            activeStrokeColor={'#18dcff'}
            inActiveStrokeColor={'#18dcff'}
          />
        </CircularProgressBase>
      </CircularProgressBase>

      <CircularProgress
        value={97}
        radius={120}
        inActiveStrokeOpacity={0.5}
        activeStrokeWidth={15}
        inActiveStrokeWidth={20}
        progressValueStyle={{ fontWeight: '100', color: 'white' }}
        activeStrokeSecondaryColor="yellow"
        inActiveStrokeColor="black"
        duration={5000}
        dashedStrokeConfig={{
          count: 50,
          width: 4,
        }}
      />



    </ScrollView>
  )

}