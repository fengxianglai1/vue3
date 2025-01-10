<template>
  <div>
    <h1>二维码</h1>
    <img
      :src="imageUrl"
      mode="scaleToFill"
    />
  </div>
</template>
 
<script setup>
import { ref } from "vue";
import QRCode from 'qrcode'
 
const imageUrl = ref('http://localhost:5173/y');
 
(
  function getQrcode() {
    QRCode.toDataURL('http://localhost:5173/search')
      .then(url => {
        console.log(url)
        imageUrl.value = url
      })
      .catch(err => {
        console.error(err)
      })
  }
)()
</script>