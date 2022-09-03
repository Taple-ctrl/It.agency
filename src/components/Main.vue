<template>
  <div class="agency">
    <div v-if="blackback" class="blackbackground"></div>
    <div v-if="blackbackCart" class="blackbackgroundCart"></div>
    <div v-if="blackbackFilter" class="blackbackgroundFilter"></div>
    <div class="cart" v-if="blackbackCart">
      <div>
        <div class="cart-close-title">
        <div class="cart-title">Корзина</div>
        <img v-on:click="blackbackCart = false" src="../assets/cart/closecart.svg" alt="">
      </div>
      <div class="cart-catalog">
        <div class="cart-catalog-text">
          <div class="cart-catalog-count">{{cart_count}} товара</div>
          <div v-on:click="CartArray.splice(0,cart_count)" class="cart-catalog-clearlist">очистить список</div>
        </div>
        <div class="cart-catalog-list">
          <div class="cart-catalog-box" v-for="(cart, index) in CartArray" :key="index">
            <div class="cart-catalog-box1">
              <img class="cart-img" :src="cart.img" alt="">
              <div class="cart-catalog-box-text">
                <div class="cart-catalog-box-text-title">{{cart.name}}</div>
                <div class="cart-catalog-box-text-price">{{cart.price}} ₽</div>
              </div>
            </div>
            <div class="cart-catalog-box2">
              <div class="cart-AddDell-product">
                <div class="cart-count-product" v-on:click="DelCountProduct(index)">
                  <img src="../assets/cart/delcountproduct.svg" alt="">
                </div>
                <div class="cart-count-product-text">{{cart.count}}</div>
                <div class="cart-count-product" v-on:click="AddCountProduct(index)">
                  <img src="../assets/cart/addcountproduct.svg" alt="">
                </div>
              </div>
              <div class="cart-del-product" v-on:click="CartArray.splice(index,1)"><img src="../assets/cart/delcartproduct.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="cart-total-price">
        <div class="cart-total-price-text">
          <div class="cart-total-price-title">Итого</div>
          <div class="cart-total-price-counter">{{totalPrice}}₽</div>
        </div>
        <div class="cart-total-price-btn">Оформить заказ</div>
      </div>
    </div>
    <div class="Header">
      <div class="container">
        <div class="header-inner">
          <div class="logo">
            <img src="../assets/logo.svg" alt="">
          </div>
          <div class="menu">
            <div class="menu-box"><a href="#">Продукты</a></div>
            <div class="menu-box"><a href="#">Цвета</a></div>
            <div class="menu-box"><a href="#">Вдохновение</a></div>
            <div class="menu-box"><a href="#">Советы</a></div>
            <div class="menu-box"><a href="#">Найти магазин</a></div>
          </div>
          <div class="phone">
            <div class="phone-number">+7 (495) 221-77-69</div>
            <a class="phone-order" href="tel:+7 (495) 221-77-69">Заказать звонок</a>
          </div>
          <div class="icons">
            <img src="../assets/icons/search.svg" alt="">
            <img src="../assets/icons/profile.svg" alt="">
            <img src="../assets/icons/heart.svg" alt="">
            <div v-on:click="blackbackCart = true" class="icons-cart">{{cart_count}}</div>
          </div>
        </div>
        <div class="header-inner-tel">
          <div class="menu-tel" :class="{'menu-tel-active': MenuBurger == true}">
            <img v-on:click="MenuBurger = false" src="../assets/cart/closecart.svg" alt="">
            <div class="menu-box"><a href="#">Продукты</a></div>
            <div class="menu-box"><a href="#">Цвета</a></div>
            <div class="menu-box"><a href="#">Вдохновение</a></div>
            <div class="menu-box"><a href="#">Советы</a></div>
            <div class="menu-box"><a href="#">Найти магазин</a></div>
          </div>
          <div class="menu-burger" v-on:click="MenuBurger = true">
            <div class="menu-burger-line"></div>
            <div class="menu-burger-line"></div>
            <div class="menu-burger-line"></div>
          </div>
          <div class="logo">
            <img src="../assets/logo.svg" alt="">
          </div>
          <div v-on:click="blackbackCart = true" class="icons-cart">{{cart_count}}</div>
        </div>
      </div>
    </div>
    <div class="slider">
      <nav>
        <li>Главная</li>
        <li>Продукты</li>
        <li>Краски</li>
      </nav>
      <img v-on:click="slidernext" class="slider-next" src="../assets/slider/slidernext.svg" alt="">
      <div class="slider-count">
        <div :class="{'slider-count-box-active': SliderCount == 1}" class="slider-count-box"></div>
        <div :class="{'slider-count-box-active': SliderCount == 2}" class="slider-count-box"></div>
        <div :class="{'slider-count-box-active': SliderCount == 3}" class="slider-count-box"></div>
        <div :class="{'slider-count-box-active': SliderCount == 4}" class="slider-count-box"></div>
        <div :class="{'slider-count-box-active': SliderCount == 5}" class="slider-count-box"></div>
      </div>
      <div v-if="SliderCount == 1" class="slider-text">
        <div class="slider-text-title">Краски1</div>
        <div class="slider-text-subtitle">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
      <div v-if="SliderCount == 2" class="slider-text">
        <div class="slider-text-title">Краски2</div>
        <div class="slider-text-subtitle">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
      <div v-if="SliderCount == 3" class="slider-text">
        <div class="slider-text-title">Краски3</div>
        <div class="slider-text-subtitle">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
      <div v-if="SliderCount == 4" class="slider-text">
        <div class="slider-text-title">Краски4</div>
        <div class="slider-text-subtitle">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
      <div v-if="SliderCount == 5" class="slider-text">
        <div class="slider-text-title">Краски5</div>
        <div class="slider-text-subtitle">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
    </div>
    <div class="catalog">
      <div class="container">
        <div class="catalog-inner">
          <div class="catalog-type">
            <div class="catalog-type-box">
              <div v-on:click="CardsFilterNew = !CardsFilterNew" class="switch-btn" :class="{'switch-on': CardsFilterNew == true}"></div>
              <div class="catalog-type-box-title">Новинки</div>
            </div>
            <div class="catalog-type-box">
              <div v-on:click="CardsFilterDisp = !CardsFilterDisp" class="switch-btn" :class="{'switch-on': CardsFilterDisp == true}"></div>
              <div class="catalog-type-box-title">Есть в наличии</div>
            </div>
            <div class="catalog-type-box">
              <div v-on:click="CardsFilterKontr = !CardsFilterKontr" class="switch-btn" :class="{'switch-on': CardsFilterKontr == true}"></div>
              <div class="catalog-type-box-title">Контрактные</div>
            </div>
            <div class="catalog-type-box">
              <div v-on:click="CardsFilterEsc = !CardsFilterEsc" class="switch-btn" :class="{'switch-on': CardsFilterEsc == true}"></div>
              <div class="catalog-type-box-title">Эксклюзивные</div>
            </div>
            <div class="catalog-type-box">
              <div v-on:click="CardsFilterSvend = !CardsFilterSvend" class="switch-btn" :class="{'switch-on': CardsFilterSvend == true}"></div>
              <div class="catalog-type-box-title">Распродажа</div>
            </div>
          </div>
          <div v-if="blackbackFilter" class="catalog-type-tel">
            <div v-on:click="blackbackFilter = false" class="catalog-type-tel-close"></div>
            <div class="catalog-type-box-tel">
              <div v-on:click="CardsFilterNew = !CardsFilterNew" class="switch-btn-tel" :class="{'switch-on-tel': CardsFilterNew == true}"></div>
              <div class="catalog-type-box-title-tel">Новинки</div>
            </div>
            <div class="catalog-type-box-tel">
              <div v-on:click="CardsFilterDisp = !CardsFilterDisp" class="switch-btn-tel" :class="{'switch-on-tel': CardsFilterDisp == true}"></div>
              <div class="catalog-type-box-title-tel">Есть в наличии</div>
            </div>
            <div class="catalog-type-box-tel">
              <div v-on:click="CardsFilterKontr = !CardsFilterKontr" class="switch-btn-tel" :class="{'switch-on-tel': CardsFilterKontr == true}"></div>
              <div class="catalog-type-box-title-tel">Контрактные</div>
            </div>
            <div class="catalog-type-box-tel">
              <div v-on:click="CardsFilterEsc = !CardsFilterEsc" class="switch-btn-tel" :class="{'switch-on-tel': CardsFilterEsc == true}"></div>
              <div class="catalog-type-box-title-tel">Эксклюзивные</div>
            </div>
            <div class="catalog-type-box-tel">
              <div v-on:click="CardsFilterSvend = !CardsFilterSvend" class="switch-btn-tel" :class="{'switch-on-tel': CardsFilterSvend == true}"></div>
              <div class="catalog-type-box-title-tel">Распродажа</div>
            </div>
          </div>
          <div class="catalog-list">
            <div class="catalog-number-sort">
              <div id="catalog-text-number-desktop" class="catalog-text-number">{{cards_count}} товаров</div>
              <div v-on:click="blackbackFilter = true" class="catalog-text-number" id="catalog-text-number-tel">Фильтры</div>
              <div v-on:click="blackback = true" v-if="blackback === false" class="catalog-text-sort">{{settingSort}}</div>
              <div v-else class="catalog-text-sort-select">
                <div v-on:click="sortB" class="catalog-text-sort-box catalog-text-sort-box-active">{{TextArray[0]}}</div>
                <div v-on:click="sortN" class="catalog-text-sort-box">{{TextArray[1]}}</div>
                <div v-on:click="sortP" class="catalog-text-sort-box">{{TextArray[2]}}</div>
                <div v-on:click="sortNew" class="catalog-text-sort-box">{{TextArray[3]}}</div>
              </div>
            </div>
            <div class="catalog-list-block">
              <div @mouseover="CardBtnVisible = index" @mouseleave="CardBtnVisible = -1" class="catalog-list-card" v-for="(Card, index) in sortcards" :key="index">
                <img v-bind:src="Card.img">
                <div class="catalog-list-card-title">{{Card.name}}</div>
                <div class="catalog-list-card-price-btn">
                  <div class="catalog-list-card-price">{{Card.price}}₽</div>
                  <div v-on:click="addCard(index)" class="catalog-list-card-btn" :class="{'catalog-list-card-btn-active': CardBtnVisible == index}">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div> 

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      SliderCount: 1,
      MenuBurger: false,
      CartArray: [],
      CardsFilterNew: false,
      CardsFilterDisp: false,
      CardsFilterKontr: false,
      CardsFilterEsc: false,
      CardsFilterSvend: false,
      CardBtnVisible: -1,
      blackback: false,
      blackbackFilter: false,
      blackbackCart: false,
      sortExpensive: false,
      settingSort: 'Сначала дорогие',
      sortfilter: 'price',
      TextArray: ['Сначала дорогие','Сначала недорогие','Сначала популярные','Сначала новые'],
      Cards: [
        {
          img: 'card/Photo.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 6000,
          new: 1,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 0,
          svendita: 0,
          rating: 2,
        },
        {
          img: 'card/Photo.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 4800,
          new: 1,
          disponibilita: 0,
          kontract: 1,
          esclusiv: 0,
          svendita: 1,
          rating: 1,
        },
        {
          img: 'card/Photo1.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 5290,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 4,
        },
        {
          img: 'card/Photo2.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 2800,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 0,
          svendita: 0,
          rating: 5,
        },
        {
          img: 'card/Photo3.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 3400,
          new: 1,
          disponibilita: 0,
          kontract: 1,
          esclusiv: 0,
          svendita: 1,
          rating: 6,
        },
        {
          img: 'card/Photo4.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 6000,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 1,
          svendita: 1,
          rating: 7
        },
        {
          img: 'card/Photo4.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 5290,
          new: 1,
          disponibilita: 0,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 10
        },
        {
          img: 'card/Photo5.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 2800,
          new: 1,
          disponibilita: 0,
          kontract: 1,
          esclusiv: 0,
          svendita: 1,
          rating: 9
        },
        {
          img: 'card/Photo5.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 3400,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 1,
          svendita: 1,
          rating: 3
        },
        {
          img: 'card/Photo6.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 6000,
          new: 0,
          disponibilita: 0,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 11
        },
        {
          img: 'card/Photo7.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 6000,
          new: 1,
          disponibilita: 0,
          kontract: 1,
          esclusiv: 0,
          svendita: 1,
          rating: 8
        },
        {
          img: 'card/Photo4.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 4800,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 15
        },
        {
          img: 'card/Photo3.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 5290,
          new: 0,
          disponibilita: 0,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 14
        },
        {
          img: 'card/Photo6.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 2800,
          new: 1,
          disponibilita: 0,
          kontract: 1,
          esclusiv: 0,
          svendita: 0,
          rating: 12
        },
        {
          img: 'card/Photo2.svg',
          name: 'Краска Wallquest, Brownsone MS90102',
          price: 3400,
          new: 0,
          disponibilita: 1,
          kontract: 0,
          esclusiv: 1,
          svendita: 0,
          rating: 13
        }
      ]
    }
  },
  methods:{
    sortB(){
      this.sortExpensive = false
      this.blackback = false
      this.sortfilter = 'price'
      this.settingSort = 'Сначала дорогие'
      this.TextArray = ['Сначала дорогие','Сначала недорогие','Сначала популярные','Сначала новые']
    },
    sortN(){
      this.sortExpensive = true
      this.blackback = false
      this.sortfilter = 'price'
      this.settingSort = 'Сначала недорогие'
      this.TextArray = ['Сначала недорогие','Сначала дорогие','Сначала популярные','Сначала новые']
    },
    sortP(){
      this.sortExpensive = false
      this.blackback = false
      this.sortfilter = 'rating'
      this.settingSort = 'Сначала популярные'
      this.TextArray = ['Сначала популярные','Сначала недорогие','Сначала дорогие','Сначала новые']
    },
    sortNew(){
      this.sortExpensive = false
      this.blackback = false
      this.sortfilter = 'new'
      this.settingSort = 'Сначала новые'
      this.TextArray = ['Сначала новые','Сначала популярные','Сначала недорогие','Сначала дорогие']
    },
    addCard(index){
      console.log(this.Cards[index]);
      this.CartArray.push({
        name: this.Cards[index].name,
        price: this.Cards[index].price,
        count: 1,
        img: this.Cards[index].img
      })
    },
    DelCountProduct(index){
      this.CartArray[index].count --
    },
    AddCountProduct(index){
      this.CartArray[index].count ++
    },
    DelProduct(index){
      this.CartArray[index].splice(index,1)
    },
    slidernext(){
      if(this.SliderCount == 1){
        this.SliderCount = 2
      }else if(this.SliderCount == 2){
        this.SliderCount = 3
      }else if(this.SliderCount == 3){
        this.SliderCount = 4
      }else if(this.SliderCount == 4){
        this.SliderCount = 5
      }else if(this.SliderCount == 5){
        this.SliderCount = 1
      }
    }
  },
  computed: {
    sortcards:function(){
      if(this.CardsFilterNew === true){
        return this.Cards.filter(function (Cards) {
          return Cards.new === 1
        })
      }

      if(this.CardsFilterDisp === true){
        return this.Cards.filter(function (Cards) {
          return Cards.disponibilita === 1
        })
      }

      if(this.CardsFilterKontr === true){
        return this.Cards.filter(function (Cards) {
          return Cards.kontract === 1
        })
      }
      if(this.CardsFilterEsc === true){
        return this.Cards.filter(function (Cards) {
          return Cards.esclusiv === 1
        })
      }
      if(this.CardsFilterSvend === true){
        return this.Cards.filter(function (Cards) {
          return Cards.svendita === 1
        })
      }
      
      if(this.sortExpensive === false){
        return sortByKeyB(this.Cards,this.sortfilter)
      }else{
        return sortByKeyM(this.Cards,this.sortfilter)
      }
    },
    cards_count: function(){
      return Object.keys(this.Cards).length;
    },
    cart_count: function(){
      return Object.keys(this.CartArray).length;
    },
    totalPrice () {
      let result = 0;
      for (let item of this.CartArray){
        result += item.price;
      }
      return result;
    }
  }
}


function sortByKeyM(array,key){
    return array.sort(function(a,b){
        var x = a[key];
        var y = b[key];
        return((x<y)?-1:((x>y)?1:0));
    })
  }

  function sortByKeyB(array,key){
    return array.sort(function(a,b){
        var x = a[key];
        var y = b[key];
        return((x>y)?-1:((x<y)?1:0));
    })
  }
</script>

<style>

</style>
