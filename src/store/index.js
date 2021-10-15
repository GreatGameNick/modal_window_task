import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalData: {
      name: '',
      title: '',
      dataId: null
    },
    chosenFolderId: '',
    modalDatas: [         //внешняя база данных. Содержит базЫ, востребованные для различных модальных окон.
      {
        dataId: 25,
        dataSet: [
          {
            id: '1',
            folders: [
              {
                id: '1/1',
                folders: [
                  {
                    id: '1/1/1',
                    folders: [
                      {
                        id: '1/1/1/1',
                        folders: []
                      },
                      {
                        id: '1/1/1/2',
                        folders: []
                      },
                    ]
                  },
                  {
                    id: '1/1/2',
                    folders: [
                      {
                        id: '1/1/2/1',
                        folders: []
                      },
                      {
                        id: '1/1/2/2',
                        folders: []
                      },
                    ]
                  },
                ]
              },
              {
                id: '1/2',
                folders: [
                  {
                    id: '1/2/1',
                    folders: [
                      {
                        id: '1/2/1/1',
                        folders: []
                      },
                      {
                        id: '1/2/1/2',
                        folders: []
                      },
                    ]
                  },
                  {
                    id: '1/2/2',
                    folders: [
                      {
                        id: '1/2/2/1',
                        folders: []
                      },
                      {
                        id: '1/2/2/2',
                        folders: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            id: '2',
            folders: [
              {
                id: '2/1',
                folders: [
                  {
                    id: '2/1/1',
                    folders: [
                      {
                        id: '2/1/1/1',
                        folders: []
                      },
                      {
                        id: '2/1/1/2',
                        folders: []
                      },
                    ]
                  },
                  {
                    id: '2/1/2',
                    folders: [
                      {
                        id: '2/1/2/1',
                        folders: []
                      },
                      {
                        id: '2/1/2/2',
                        folders: []
                      },
                    ]
                  },
                ]
              },
              {
                id: '2/2',
                folders: [
                  {
                    id: '2/2/1',
                    folders: [
                      {
                        id: '2/2/1/1',
                        folders: []
                      },
                      {
                        id: '2/2/1/2',
                        folders: []
                      },
                    ]
                  },
                  {
                    id: '2/2/2',
                    folders: [
                      {
                        id: '2/2/2/1',
                        folders: []
                      },
                      {
                        id: '2/2/2/2',
                        folders: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      }
    ]
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
    GET_CHOSEN_FOLDER_ID: state => state.chosenFolderId
  },
  mutations: {
    SET_MODAL_COMPONENT_DATA(state, data) {
      state.modalData = data
    },
    SET_CHOSEN_LEVEL(state, id) {
      state.chosenFolderId = id
    }
  },
  actions: {},
  modules: {}
})
