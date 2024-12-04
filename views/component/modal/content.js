export let contents=`
        <div class="modal fixed inset-0 flex items-center justify-center z-50 ">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tasks text-gray-500"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Market Search</h2>
                    </div>
                    <button class="p-2 hover:bg-gray-100 rounded">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                </div>

                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2">
 <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded ">Développement</span>                      <div>
                           <label class="block text-sm font-medium text-gray-700 mt-4">Title</label>
                           <input type="text" contenteditable="false" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                       </div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Description</h3>
                            <textarea  class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                        <h3 class="text-sm font-medium text-gray-700 mb-2">Date</h3>
                          <div class="flex">
                                <time-picker class="mr-3"></time-picker>
                                <date-picker class=""></date-picker>
                        </div>
                                      </div>
                      
                               
                        <div class="mb-6 hidden">
                            
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Activity</h3>
                            <div class="space-y-4">
                                <div class="flex space-x-3">
                                    <img src="" alt="User" class="w-8 h-8 rounded-full">
                                    <div>
                                        <p class="text-sm">
                                            <span class="font-medium text-gray-800">John Doe</span>
                                            <span class="text-gray-600">added this card to To Do</span>
                                        </p>
                                        <span class="text-xs text-gray-500">2 hours ago</span>
                                    </div>
                                </div>

                                <div class="flex space-x-3">
                                    <img src="" alt="User" class="w-8 h-8 rounded-full">
                                    <div>
                                        <p class="text-sm">
                                            <span class="font-medium text-gray-800">Jane Smith</span>
                                            <span class="text-gray-600">added the Design label</span>
                                        </p>
                                        <span class="text-xs text-gray-500">1 hour ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Add to card</h3>
                            <div class="space-y-2">
                                
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center hidden">
                                    <i class="fas fa-check-square mr-2"></i>
                                    <span>Checklist</span>
                                </button>
                                
<form class="max-w-sm mx-auto">
   <div class="flex">
       <button id="states-button" data-dropdown-toggle="Bookmark_" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-bookmark mr-2"></i>
                                    <span>Bookmark</span>
       </button>
       <div id="Bookmark_" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded">Design</span>
                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded">Développement</span>

                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                          <span class="px-2 py-1 text-xs rounded bg-green-100 text-green-600">Low Priority</span>

                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                   <span class="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600">Research</span>

                   </button>
               </li>
           </ul>
       </div>
       
   </div>
 </form>
 
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Actions</h3>
                            <div class="space-y-2">
                                                               
<form class="max-w-sm mx-auto">
   <div class="flex">
       <button id="states-button" data-dropdown-toggle="list_" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-arrow-right mr-2"></i>
                                    <span>Move To</span>
       </button>
       <div id="list_" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        To Do
                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        In Progress
                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        Review
                   </button>
               </li>
               <li>
                   <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        Completed
                   </button>
               </li>
           </ul>
       </div>
       
   </div>
 </form>
                    
                                <button class="w-full p-2 text-left text-red-600 hover:bg-red-50 rounded flex items-center">
                                    <i class="fas fa-trash-alt mr-2"></i>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                     
                </div>
                   <button 
            class="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 space-x-2"
        >
           
            <span>New Task</span>
        </button>
         <button 
            
            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 space-x-2"
        >   
            <span>Undo Change</span>
        </button>
            </div>
        </div>
      
    </div>
        `;