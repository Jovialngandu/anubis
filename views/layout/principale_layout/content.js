export  const content_layout=`
 <!-- Top Navigation Bar -->
   <slot name="header-element">
   </slot>
   
    <!-- Main Content -->
    <div class="flex h-screen pt-20 ">
        <!-- Sidebar -->
        <slot name="side-bar"></slot>
        
        <!-- Board Content -->
        <slot name="main">
        </slot>
        
    </div>
    <!-- Task Detail Modal -->
    <slot name="modal">
    </slot>
  
     <link href="../public/assets/css/all.min.css" rel="stylesheet">
    <link href="../public/assets/css/style.css" rel="stylesheet">
    <link href="../public/assets/css/flowbite.min-2.2.1.css" rel="stylesheet">
`



