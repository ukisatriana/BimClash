import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },

// project
    {
        key: 'dashboard.project',
        path: `${APP_PREFIX_PATH}/project/project-list`,
        component: React.lazy(() => import('views/app-views/project/project-list')),
    },
    {
        key: 'dashboard.project.add',
        path: `${APP_PREFIX_PATH}/project/project-add`,
        component: React.lazy(() => import('views/app-views/project/project-add')),
    },
    {
        key: 'dashboard.project.edit',
        path: `${APP_PREFIX_PATH}/project/project-edit/:id`,
        component: React.lazy(() => import('views/app-views/project/project-edit')),
    },

    //data clash
    {
        key: 'data.clash',
        path: `${APP_PREFIX_PATH}/data-clash/data-clash-list`,
        component: React.lazy(() => import('views/app-views/data-clash/data-clash-list')),
    },
    {
        key: 'data.clash.add',
        path: `${APP_PREFIX_PATH}/data-clash/data-clash-add`,
        component: React.lazy(() => import('views/app-views/data-clash/data-clash-add')),
    },
    {
        key: 'data.clash.edit',
        path: `${APP_PREFIX_PATH}/data-clash/data-clash-edit/:id`,
        component: React.lazy(() => import('views/app-views/data-clash/data-clash-edit')),
    },



 // option input
    //jenis clash
    {
        key: 'dashboard.option.jenis-clash',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-list`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-list')),
    },
    {
        key: 'dashboard.option.jenis-clash.add',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-add`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-add')),
    },
    {
        key: 'dashboard.option.jenis-clash.edit',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-edit/:id`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-edit')),
    },
    

     //kategori clash
     {
        key: 'dashboard.option.kategori-clash',
        path: `${APP_PREFIX_PATH}/input-option/kategori-clash/kategori-clash-list`,
        component: React.lazy(() => import('views/app-views/input-option/kategori-clash/kategori-clash-list')),
    },
    {
        key: 'dashboard.option.kategori-clash.add',
        path: `${APP_PREFIX_PATH}/input-option/kategori-clash/kategori-clash-add`,
        component: React.lazy(() => import('views/app-views/input-option/kategori-clash/kategori-clash-add')),
    },
    {
        key: 'dashboard.option.kategori-clash.edit',
        path: `${APP_PREFIX_PATH}/input-option/kategori-clash/kategori-clash-edit/:id`,
        component: React.lazy(() => import('views/app-views/input-option/kategori-clash/kategori-clash-edit')),
    },


     //status validasi
     {
        key: 'dashboard.option.status-validasi',
        path: `${APP_PREFIX_PATH}/input-option/status-validasi/status-validasi-list`,
        component: React.lazy(() => import('views/app-views/input-option/status-validasi/status-validasi-list')),
    },
    {
        key: 'dashboard.option.status-validasi.add',
        path: `${APP_PREFIX_PATH}/input-option/status-validasi/status-validasi-add`,
        component: React.lazy(() => import('views/app-views/input-option/status-validasi/status-validasi-add')),
    },
    {
        key: 'dashboard.option.status-validasi.edit',
        path: `${APP_PREFIX_PATH}/input-option/status-validasi/status-validasi-edit/:id`,
        component: React.lazy(() => import('views/app-views/input-option/status-validasi/status-validasi-edit')),
    },


    //tindak lanjut
    {
        key: 'dashboard.option.tindak-lanjut',
        path: `${APP_PREFIX_PATH}/input-option/tindak-lanjut/tindak-lanjut-list`,
        component: React.lazy(() => import('views/app-views/input-option/tindak-lanjut/tindak-lanjut-list')),
    },
    {
        key: 'dashboard.option.tindak-lanjut.add',
        path: `${APP_PREFIX_PATH}/input-option/tindak-lanjut/tindak-lanjut-add`,
        component: React.lazy(() => import('views/app-views/input-option/tindak-lanjut/tindak-lanjut-add')),
    },
    {
        key: 'dashboard.option.tindak-lanjut.edit',
        path: `${APP_PREFIX_PATH}/input-option/tindak-lanjut/tindak-lanjut-edit/:id`,
        component: React.lazy(() => import('views/app-views/input-option/tindak-lanjut/tindak-lanjut-edit')),
    },

]