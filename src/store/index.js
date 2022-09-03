/* eslint-disable */
export default {
    namespaced: true,
    state: {
      currentVehicle: "MiddlePage",
      // MotorPage
      // LamboPage
      // BugattiPage
      // MercedesPage
      // BmwPage
      // RollsPage
      // BentleyPage
      // FerrariPage
      // MiddlePage
      // DiamondPage
      // LuxePage
      // JeepPage
      // CasualPage
      // GaragePage
      currentPage: 'StartPage',
      colors: [
        { r: 255, g: 255, b: 255},
        { r: 0, g: 0, b: 0},
        { r: 63, g: 47, b: 23},
        { r: 145, g: 35, b: 148},
        { r: 102, g: 88, b: 189},
        { r: 136, g: 42, b:209 },
        { r: 210, g: 67, b: 234},
        { r: 42, g: 79, b: 209},
        { r: 97, g: 179, b: 255},
        { r: 15, g: 124, b: 25},
        { r: 16, g: 85, b: 81},
        // { r: 42, g: 209, b: 199},
        // { r: 78, g: 6, b: 6},
        // { r: 26, g: 54, b: 80},
        // { r: 254, g: 201, b:124 },
        // { r: 231, g: 141, b: 36},
        // { r: 252, g: 201, b: 22},
        // { r: 209, g: 42, b: 42},
        // { r: 132, g: 85, b: 85},
      ],
      cars: [
        {
            index: 1,
            carName: 'Mercedes amg'
        },
        {
            index: 2,
            carName: 'Audi rs6'
        },
        {
            index: 3,
            carName: 'Mclaren rr'
        },
        {
            index: 4,
            carName: 'Audi rs6'
        },
        {
            index: 5,
            carName: 'wolksvagen golf 4'
        },
        {
            index: 5,
            carName: 'wolksvagen polo'
        },
        {
            index: 5,
            carName: 'Mercedes-benz G65'
        }
      ],
      nameModel: 'R820',
      soldOut: false,
      maxValueSpecifications: 6,
      specifications: {
        speed: {
          value: 5,
          desc: 'car:dlrship:desc:1'
        },
        braking: {
          value: 4,
          desc: 'car:dlrship:desc:2'
        },
        acceleration: {
          value: 3,
          desc: 'car:dlrship:desc:3'
        },
        traction: {
          value: 2,
          desc: 'car:dlrship:desc:4'
        }
      },
      price: 2000000000,
      fuelConsumption: 'Низкий',
      fuelTank: 70,
      trunk: 150
    },
    mutations: {
      setCurrentPage: function(state, page) {
        state.currentPage = page
      },
      setCurrentVehicle: function(state, value) {
        state.currentVehicle = value
      },
      setData: function(state, value) {
        state.nameModel = value.data.name
        state.soldOut = value.data.selled
        state.specifications.speed.value = value.specifications.speed
        state.specifications.braking.value = value.specifications.braking
        state.specifications.acceleration.value = value.specifications.acceleration
        state.specifications.traction.value = value.specifications.traction
        state.price = value.data.price
        state.fuelConsumption = value.data.fuelConsumption == 1 ? 'Низкий' : value.data.fuelConsumption == 2 ? 'Средний' : 'Высокий'
        state.fuelTank = value.data.fuel
        state.trunk = value.data.trunc
      }
    }
  }