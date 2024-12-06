<template>
    <div class="register-page">
      <h1>Đây là Trang Đăng Ký</h1>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Tên</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            placeholder="Nhập tên của bạn" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            placeholder="Nhập email của bạn" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password" 
            v-model="formData.password" 
            placeholder="Nhập mật khẩu" 
            required 
          />
        </div>
        <button type="submit" class="btn-register">Đăng Ký</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterPage",
    
  };
  </script>
  
  <style scoped>
  .register-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-register {
    display: block;
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn-register:hover {
    background: #0056b3;
  }
  </style>
  