<template>
    <div class="avtobuy">
      <div class="main-stat-block">
        <div class="text-block">
            <div class="text-block-pos">
                <div class="text-block-name">
                    <div class="text-block-name-title">АВТОСАЛОН</div>
                    <div class="text-block-name-subtitle">PREMIUM</div>
                </div>
                <div class="text-block-stat">
                    <div class="car-data">
                        <div class="car-data-box">
                            <div class="car-data-box-img">
                               <img src="../assets/benz.svg" alt="">
                            </div>
                            <div class="car-data-box-text">
                                <div class="car-data-box-text-number">{{Car.state.fuelConsumption}}</div>
                                <div class="car-data-box-text-text">расход</div>
                            </div>
                        </div>
                        <div class="car-data-box">
                            <div class="car-data-box-img">
                               <img src="../assets/bak.svg" alt="">
                            </div>
                            <div class="car-data-box-text">
                                <div class="car-data-box-text-number">{{Car.state.fuelTank}} литров</div>
                                <div class="car-data-box-text-text">Вместимость бака</div>
                            </div>
                        </div>
                        <div class="car-data-box">
                            <div class="car-data-box-img">
                               <img src="../assets/ves.svg" alt="">
                            </div>
                            <div class="car-data-box-text">
                                <div class="car-data-box-text-number">{{Car.state.trunk}} kg</div>
                                <div class="car-data-box-text-text">Вместимость багажника</div>
                            </div>
                        </div>
                    </div>
                    <div class="car-parametr">
                        <div class="car-parametr-box">
                            <div class="car-parametr-box-title">Скорость</div>
                            <div class="car-parametr-box-number-block">
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.speed.value >= 1" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.speed.value >= 2" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.speed.value >= 3" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.speed.value >= 4" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.speed.value >= 5" class="car-parametr-box-number-content"></div>
                                </div>
                            </div>
                        </div>
                        <div class="car-parametr-box">
                            <div class="car-parametr-box-title">ТОрможение</div>
                            <div class="car-parametr-box-number-block">
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.braking.value >= 1" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.braking.value >= 2" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.braking.value >= 3" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.braking.value >= 4" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.braking.value >= 5" class="car-parametr-box-number-content"></div>
                                </div>
                            </div>
                        </div>
                        <div class="car-parametr-box">
                            <div class="car-parametr-box-title">Ускорение</div>
                            <div class="car-parametr-box-number-block">
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.acceleration.value >= 1" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.acceleration.value >= 2" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.acceleration.value >= 3" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.acceleration.value >= 4" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.acceleration.value >= 5" class="car-parametr-box-number-content"></div>
                                </div>
                            </div>
                        </div>
                        <div class="car-parametr-box">
                            <div class="car-parametr-box-title">Управление</div>
                            <div class="car-parametr-box-number-block">
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.traction.value >= 1" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.traction.value >= 2" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.traction.value >= 3" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.traction.value >= 4" class="car-parametr-box-number-content"></div>
                                </div>
                                <div class="car-parametr-box-number">
                                    <div v-if="Car.state.specifications.traction.value >= 5" class="car-parametr-box-number-content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-block">
            <div class="color-block-pos">
                <div class="color-box" v-for="(Color, index) in Car.state.colors" :key="index">
                    <div :style="{'background-color': 'rgb('+ Color.r +','+ Color.g +','+ Color.b +')'}" class="color-box-content"></div>
                </div>
            </div>
        </div>
        <div class="buy-block">
            <div class="buy-block-pos">
                <div class="test-drive">Тест-драйв</div>
                <div class="nal" v-on:click="ActiveBuyNal" v-bind:class="{ 'buy-active': isActiveBuyNal }">
                    <img src="../assets/nal.svg" alt="">
                    <div class="card-text">НАЛИЧКА</div>
                </div>
                <div class="card" v-on:click="ActiveBuyCard" v-bind:class="{ 'buy-active': isActiveBuyCard }">
                    <img src="../assets/card.svg" alt="">
                    <div class="card-text">КАРТА</div>
                </div>
                <div class="buy">Купить</div>
            </div>
        </div>
      </div>
      <div class="car-list" @mousewheel="scrollcarlist">
        <div v-on:click="selectcar(index)" class="car-list-box " :class="{ActiveCar: isActiveCar == index}" v-for="(Cars, index) in Car.state.cars" :key="index">
            <div class="car-list-box-pos">
                <div class="car-list-box-title">{{Cars.carName}}</div>
                <div class="car-list-box-price">${{Car.state.price}}</div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import Car from '../store/index'

export default {
  name: 'AvtoBuy',
  data () {
    return {
        Car: Car,
        isActiveBuyNal: false,
        isActiveBuyCard: false,
        isActiveCar: -1,
    }
  },
  methods: {
    selectcar(index){
        console.log('Индекс машины:' + this.Car.state.cars[index].index);
        this.isActiveCar = index;
        console.log(this.isActiveCar);
    },
    ActiveBuyNal(){
        this.isActiveBuyNal = true
        this.isActiveBuyCard = false
    },
    ActiveBuyCard(){
        this.isActiveBuyNal = false
        this.isActiveBuyCard = true
    },
    scrollcarlist(event){
        event.preventDefault()
    }
  }
}
</script>
<style>
.avtobuy{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(50% 50% at 50% 50%, rgba(23, 23, 28, 0) 0%, #17171C 100%);
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

.main-stat-block{
    justify-content: space-between;
    display: flex;
    height: 85%;
}

.car-list{
    overflow: hidden;
    overflow-x: scroll;
    white-space:nowrap;
    padding-bottom: 1vw;
}

.car-list::-webkit-scrollbar{
    height: 0.3vw;
}

.car-list::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.25);
}
.car-list::-webkit-scrollbar-thumb {
    background-color: #DB121B;
}

.car-list-box:first-child{
    margin: 0;
}

.car-list-box-pos{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.car-list-box-title{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25vw;

    text-transform: uppercase;

    color: #FFFFFF;
}

.car-list-box-price{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.05);
}

.color-block{
    display: flex;
    align-items: flex-end;
}

.color-block-pos{
    display: flex;
    gap: 5px;
}

.color-box{
    width: 35px;
    height: 35px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.color-box-content{
    background: #FFFFFF;
    width: 17.5px;
    height: 17.5px;
    border-radius: 44px;
}

.buy-block{
    display: flex;
    align-items: flex-end;
}

.text-block-stat{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.text-block-pos{
    display: flex;
    flex-direction: column;
    gap: 10vh;
}

.text-block-name-title{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 800;
    font-size: 2.5vw;

    background: linear-gradient(90deg, #DB121B 0%, #C6215C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 112.591px rgba(255, 255, 255, 0.25);
}

.text-block-name-subtitle{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.05vw;

    text-transform: uppercase;

    color: #FFFFFF;
}

.car-data{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.car-data-box{
    display: flex;
    align-items: center;
    gap: 10px;
}

.car-data-box-img{
    width: 3.125vw;
    height: 3.125vw;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    display: flex;align-items: center;justify-content: center;
}

.car-data-box-img img{
   width: 1.303vw;
}

.car-data-box-text-number{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.05vw;
    /* identical to box height */

    text-transform: uppercase;

    color: #FF8383;
}

.car-data-box-text-text{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25vw;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
}

.car-parametr{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.car-parametr-box{
    display: flex;
    flex-direction: column;
    gap: 0.4vw;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    padding: 0.2604vw 0 0.73vw 1.042vw;
}

.car-parametr-box-title{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25vw;
    line-height: 29px;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
}

.car-parametr-box-number{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    width: 19px;
    height: 19px;
}

.car-parametr-box-number-block{
    display: flex;
    gap: 5px;
}

.car-parametr-box-number-content{
    width: 11px;
    height: 11px;
    background: #DB121B;
    box-shadow: 0px 0px 14.6364px rgba(219, 18, 27, 0.55);
}

.buy-block-pos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5vw;
  grid-template-areas:
    "test-drive test-drive"
    "nal card"
    "buy buy";
}
.test-drive {
    grid-area: test-drive;
    background: rgba(58, 58, 58, 0.25);
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #FFFFFF;
}
.nal {
    grid-area: nal;
    background: rgba(0, 0, 0, 0.25);
    /* background: #DB121B; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    gap: 0.5vw;
}
.card {
    grid-area: card;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5vw;
    cursor: pointer;
}

.card-text{
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;

    color: #FFFFFF;
}

.buy-active{
    background: linear-gradient(180deg, rgba(219, 18, 27, 0.5) 0%, rgba(123, 9, 14, 0.5) 100%);
}

.buy {
    width: 295px;
    height: 75px;
    grid-area: buy;
    background: linear-gradient(180deg, #DB121B 0%, #7B090E 100%);
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
}

</style>
