import { DashboardOutlined, RadiusSettingOutlined, BuildOutlined, FileTextOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const mainDataNavTree = [{
  key: 'main data',
  path: `${APP_PREFIX_PATH}/project`,
  title: 'sidenav.main.data',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'data-project',
      path: `${APP_PREFIX_PATH}/project/project-list`,
      title: 'sidenav.main.project',
      icon: RadiusSettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'data-clash',
      path: `${APP_PREFIX_PATH}/data-clash/data-clash-list`,
      title: 'sidenav.main.data.clash',
      icon: BuildOutlined,
      breadcrumb: false,
      submenu: []
    },

  ]
}]

const inputOptionNavTree = [{
  key: 'Input Option',
  path: `${APP_PREFIX_PATH}/input-option`,
  title: 'sidenav.input.option',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'option-jenis-clash',
      path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-list`,
      title: 'sidenav.input.jenis.clash',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'option-kategori-clash',
      path: `${APP_PREFIX_PATH}/input-option/kategori-clash/kategori-clash-list`,
      title: 'sidenav.input.kategori.clash',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'option-status-validasi',
      path: `${APP_PREFIX_PATH}/input-option/status-validasi/status-validasi-list`,
      title: 'sidenav.input.status.validasi',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'option-tindak-lanjut',
      path: `${APP_PREFIX_PATH}/input-option/tindak-lanjut-list`,
      title: 'sidenav.input.tindak.lanjut',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },

  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...mainDataNavTree,
  ...inputOptionNavTree
]

export default navigationConfig;
