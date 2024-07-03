<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class='dashboard'>
        <div class="sidebar">
            <header>
                <a href="#!" class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </a>
                <a href="#" class="brand-logo">
                    <img src="../../resources/img/logo_rical.png" class="logo-img">
                </a>
            </header>
            <nav class="dashboard-nav-list">
                <a href="../../views/admin/inicio.html" class="dashboard-nav-item">
                    <i class="fas fa-home"></i> Home
                </a>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-users"></i> Usuarios
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="../../views/admin/admin_estudiantes.html"
                            class="dashboard-nav-dropdown-item">Alumnos</a>
                        <a href="../../views/admin/admin_profesores.html"
                            class="dashboard-nav-dropdown-item">Profesores</a>
                        <a href="../../views/admin/admin_administradores.html"
                            class="dashboard-nav-dropdown-item">Administradores</a>
                    </div>
                </div>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fa-solid fa-paste"></i>Formularios
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="../../views/admin/admin_roles_ptc.html" class="dashboard-nav-dropdown-item">Roles</a>
                        <a href="../../views/admin/admin_estado_propuestas.html"
                            class="dashboard-nav-dropdown-item">Estado Propuestas</a>
                    </div>
                </div>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-money-check-alt"></i> Proyectos PTC
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="../../views/admin/admin_propuestas_insti.html"
                            class="dashboard-nav-dropdown-item">Crear Proyecto</a>
                        <a href="../../views/admin/admin_equipos_ptc.html"
                            class="dashboard-nav-dropdown-item">Equipos</a>
                    </div>
                </div>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fa-solid fa-graduation-cap"></i>Gestión Cursos
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="../../views/admin/admin_cursos.html" class="dashboard-nav-dropdown-item">Cursos</a>
                        <a href="../../views/admin/admin_secciones.html"
                            class="dashboard-nav-dropdown-item">Secciones</a>
                        <a href="../../views/admin/admin_especialidad.html"
                            class="dashboard-nav-dropdown-item">Especialidad</a>
                        <a href="../../views/admin/admin_grupos.html" class="dashboard-nav-dropdown-item">Grupos</a>
                        <a href="../../views/admin/admin_seleccion_niveles.html"
                            class="dashboard-nav-dropdown-item">Académicos</a>
                    </div>
                </div>
                <a href="#" class="dashboard-nav-item">
                    <i class="fas fa-user"></i> Perfil
                </a>
                <div class="nav-item-divider"></div>
                <a href="#" class="dashboard-nav-item">
                    <i class="fas fa-sign-out-alt"></i> Salir
                </a>
            </nav>
        </div>
        
        <div class='content-area'>
            <header class='dashboard-toolbar'>
                <a href="#!" class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </a>
            </header>
            <main class="mt-2">
                <!-- Contenido principal -->
            </main>
        </div>
    </div>
</body>
</html>
