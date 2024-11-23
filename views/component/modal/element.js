export  class TaskModal  extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="modal fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tasks text-gray-500"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Design new landing page</h2>
                    </div>
                    <button class="p-2 hover:bg-gray-100 rounded">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                </div>

                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2">
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Description</h3>
                            <textarea class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                        </div>

                        <div class="mb-6">
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
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-user mr-2"></i>
                                    <span>Members</span>
                                </button>
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-tag mr-2"></i>
                                    <span>Labels</span>
                                </button>
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-check-square mr-2"></i>
                                    <span>Checklist</span>
                                </button>
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-calendar mr-2"></i>
                                    <span>Due Date</span>
                                </button>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Actions</h3>
                            <div class="space-y-2">
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-arrow-right mr-2"></i>
                                    <span>Move</span>
                                </button>
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center">
                                    <i class="fas fa-copy mr-2"></i>
                                    <span>Copy</span>
                                </button>
                                <button class="w-full p-2 text-left text-red-600 hover:bg-red-50 rounded flex items-center">
                                    <i class="fas fa-trash-alt mr-2"></i>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}