import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    modalData: {
      name: '',
      title: '',
      dataId: null
    },
    chosenLevel: '',
    chosenFolderId: '',
    modalResult: '',
    modalDatas: [],           //внешняя база данных. Содержит базЫ, востребованные для различных модальных окон.
  },
  getters: {
    GET_MODAL_DATA: state => state.modalData,
    GET_CURRENT_DATA_SET: state => state.modalDatas.find(set => set.dataId === state.modalData.dataId).dataSet,  //из всех имеющихся у нас баз данных, которые востребованы для работы различных модальных окон, выбираем требуемую
    GET_FOLDER_SET: (state, getters) => folderId => {
      let folderChunks = folderId.split('/')       // [1, 2, 2]
      let currentFolderSet = getters.GET_CURRENT_DATA_SET

      for(let chunk of folderChunks) {
        currentFolderSet = currentFolderSet.find(folder => folder.id.split('/').pop() === chunk).folders
      }
      return currentFolderSet
    },
    GET_CHOSEN_LEVEL: state => state.chosenLevel,
    GET_CHOSEN_FOLDER_ID: state => state.chosenFolderId,
    GET_USER_NAME: state => state.userName,
    GET_SUBMIT: state => state.modalResult
  },
  mutations: {
    SET_MODAL_COMPONENT_DATA(state, data) {
      state.modalData = data
    },
    SET_CHOSEN_LEVEL(state, id) {
      state.chosenLevel = id
    },
    SET_CHOSEN_FOLDER_ID(state, id) {
      state.chosenFolderId = id
    },
    SET_EXTERNAL_DATA(state, data) {
      state.modalDatas = data
    },
    SET_USER_NAME(state, name) {
      state.userName = name
    },
    SET_MODAL_RESULT: state => state.modalResult = state.chosenFolderId,
    RESET_CHOICE: state => {
      state.chosenFolderId = ''
      state.modalResult = ''
      state.chosenLevel = ''
    }

  },
  actions: {
    async FETCH_EXTERNAL_DATA({commit}) {
      await axios.get(window.location.href + 'externalData.json')
        .then(({data}) => commit('SET_EXTERNAL_DATA', data.sets))
        .catch(error => console.log)
    }
  },
  modules: {}
})
