import { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: Itask[];
}



const initialState : InitialState = {
  task: [
    {
      id: 0,
      title: "Initialize frontend project",
      description: "Create a new frontend project using Vite",
      dueDate: "2025-02-01",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
