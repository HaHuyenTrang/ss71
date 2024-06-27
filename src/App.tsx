import React from 'react'
import Count from './components/Count'
import Todolist from './components/Todolist'

export default function App() {
  return (
    <div>App
      {/* 
        tại sao lại dùng redux-toolkit thay thay thì dùng redux
        1. đối redux khi khởi tạo store thì trong cac hàm reduccer
        thường tách ra các action, các hàm reducer sẽ tính toán trả về 
        state mới dựa vào action truyền lên
        2.còn đối với redux-toolkit viết code sẽ gọn hơn tại vì những action,
        reducer sẽ được viết gộp lại
        3.khi dùng redux thường thì muốn xử lí các tcs vụ bất đồng bộ (call API, gọi tới server (db.json))
        sẽ cài thêm thư viện redux-thunk
        4.khi dùng redux toolkit nó sẽ giúp xử lí được các tác vụ bất đồng bộ bằng cách dùng createAsyncThunk
        **********************************
        1.cấu hình setup với redux-toolkit
        2.tương tác xử lí bất đồng bộ
      */}
      <Count></Count>
      <Todolist></Todolist>
    </div>
  )
}
