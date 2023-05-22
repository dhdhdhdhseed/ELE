import Layout from '@/Layout/index'
export default [{
	path: '/home',
	name: 'home',
    component: () => import('@/views/platHome/index'),
	meta: {
		title: '平台首页',
		icon: 'FileOutlined'
	},
	children: [{
		path: '/home/index',
		name: 'platHome',
		component: () => import('@/views/platHome/home'),
		meta: {
			title: '首页',
			icon: 'FileImageOutlined'
		}
	}, {
		path: '/home/classify',
		name: 'classify',
		component: () => import('@/views/platHome/classify'),
		meta: {
			title: '分类',
			icon: 'PartitionOutlined'
		}
	}]
}]