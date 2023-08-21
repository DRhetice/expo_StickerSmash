import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ImageViewer({placeholderImage, selectedImage}) {
  const imageSource = selectedImage ? {uri:selectedImage} :placeholderImage;
  return (
  <Image source={imageSource} className="w-[320px] h-[440px] rounded-2xl" />
  )
}