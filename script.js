function login() {
    // Lógica para verificar el inicio de sesión (no implementado en este ejemplo)
    
  
  document.getElementById("loginPage").style.display = "none";
    document.getElementById("optionsPage").style.display = "block";
  }
  
  function showRegisterPage() {
    window.location.href = "register.html";
  }
  
  function showConsultPage() {
    window.location.href = "consult.html";
  }
  
  function showAdminPage() {
    window.location.href = "admin.html";
  }
  
  function logout() {
    window.location.href = "index.html";
  }
  
  function showEditUserPage() {
    // Lógica para mostrar la página de edición de usuario (no implementado en este ejemplo)
  }
  
  function showEditInfoPage() {
    // Lógica para mostrar la página de edición de información (no implementado en este ejemplo)
  }
  
  function submitForm(action) {
    
   
  // Lógica para enviar datos del formulario según la acción (registro o consulta)
    // No implementado en este ejemplo
  }
  function goBack() {
    window.location.href = "index.html";
  }