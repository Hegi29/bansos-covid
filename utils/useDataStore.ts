import create from 'zustand';

const useDataStore = create<any>((set: any) => ({
  data: null,
  addData: async (data: any) => {
    set((state: any) => ({ ...state, data }));
  },
  // editData: async (data: any) => {
  //   set((state: any) => ({ ...state, data }));
  // },
  // deleteData: async (data: any) => {
  //   set((state: any) => ({ ...state, data }));
  // }
}));

export { useDataStore };
