<script setup lang="ts">
import type { Friend } from '@/types';
import FriendCard from './FriendCard.vue';
import Section from './Section.vue';


const friends : Friend[] = [
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  },
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  },
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  },
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  },
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  },
  {
    id: 'ID02134',
    name: 'Maria',
    surname: 'Joseph',
    dateOfBirth: new Date(12-12-1990),
    sex: 'female'
  }
]

</script>

<template>
  <Section header="My Friends">
    <FriendCard v-for="friend in friends" :key="friend.id"></FriendCard>
  </Section>
</template>