<template>
  <client-only>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title style="cursor: pointer" @click="$router.push('/')">
            <q-avatar>
              <Icon icon="logos:graphene" width="30" />
            </q-avatar>
            <span class="font-family-body">GraphIntelligence</span>
          </q-toolbar-title>
          <q-space />

          <q-tabs shrink stretch>
            <q-route-tab
              style="width: 100px"
              :to="btn.path"
              v-for="btn in tab"
              :key="btn.name"
            >
              <Icon :icon="btn.icon" height="25" />
              {{ btn.name }}
            </q-route-tab>
          </q-tabs>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <slot />
      </q-page-container>
    </q-layout>
  </client-only>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const tab = [
  {
    path: '/',
    name: 'tab.home',
    icon: 'mdi-tag',
  },
]
</script>
