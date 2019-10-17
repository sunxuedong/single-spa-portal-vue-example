import Workflow from '@/views/workflow/Workflow.vue'
import List from '@/views/workflow/List.vue'
export default [
  {
    path: '/',
    redirect: '/workflow/list/todo'
  },
  {
    path: '/workflow',
    name: '/workflow',
    redirect: '/workflow/list/todo',
    meta: {
      title: '系统首页'
    },
    // component: () => import('@/views/workflow/Workflow.vue'),
    component: Workflow,
    children: [
      {
        path: 'list',
        redirect: 'list/todo'
      },
      {
        path: 'list/:status',
        name: 'list',
        // component: () => import('@/views/workflow/List.vue')
        component: List
      }
    ]
  }
]