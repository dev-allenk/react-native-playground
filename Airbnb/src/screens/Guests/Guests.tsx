import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import s from './style'

const GUEST_DATA = [
  { title: 'Adult', subTitle: 'Ages 13 or above' },
  { title: 'Children', subTitle: 'Ages 2-12' },
  { title: 'Infant', subTitle: 'Under 2' },
]

const GuestsScreen = () => {
  return (
    <View style={s.container}>
      {GUEST_DATA.map(data => (
        <GuestRow key={data.title} {...data} />
      ))}
    </View>
  )
}

function GuestRow({ title, subTitle }: typeof GUEST_DATA[0]) {
  const [count, setCount] = useState(0)
  const increase = () => setCount(s => s + 1)
  const decrease = () => setCount(s => Math.max(0, s - 1))

  return (
    <View style={{ ...s.row, ...s.itemContainer }}>
      <View>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subTitle}>{subTitle}</Text>
      </View>

      <View style={s.row}>
        <Pressable style={s.button} onPress={decrease}>
          <Text>{'-'}</Text>
        </Pressable>

        <Text style={s.countText}>{count}</Text>

        <Pressable style={s.button} onPress={increase}>
          <Text>{'+'}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default GuestsScreen
