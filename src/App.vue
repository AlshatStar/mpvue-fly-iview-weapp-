<script>
export default {
  created () {
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>

  page{
    /*overflow-y: hidden;*/
    height: 100%;
  }

  .container {
    height: 100%;
    box-sizing: border-box;
    background-color: #f4f4f4;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
  }

  view,image,text,navigator{
    box-sizing: border-box;
    padding:0;
    margin:0;

  }

  view,text{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-size: 29rpx;
    color: #333;
  }

</style>
