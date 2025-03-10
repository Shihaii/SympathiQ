<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ForumCard from './ForumTopic.vue';
import { ref } from 'vue';
import type { ForumDiscussion, ForumTopic } from '@/types';
import { getForumDiscussions, getTopics } from '@/controllers/ForumContrtoller';
// import ForumTopic from './ForumTopic.vue';

const forumDiscussions = ref<ForumDiscussion[]>([]);

const fetchForumDiscussions = async () => {
  const result = await getForumDiscussions();
  if (Array.isArray(result)) {
    forumDiscussions.value = result;
  }
};
 fetchForumDiscussions();

 const topics = ref<ForumTopic[]>([]);
 const selectedTopic = ref<ForumTopic>();
 const selectedSubtopic = ref<ForumTopic|null>();


 const fetchTopics = async () => {
    const result = await getTopics();
  if (Array.isArray(result)) {
    topics.value = result;
    selectedTopic.value = topics.value[0]
  }
 }
 fetchTopics();


 const selectTopic = (topic: ForumTopic) => {
    if(selectedTopic.value != topic){
        selectedTopic.value = topic; 
        selectedSubtopic.value = null;

        //get forum posts here
    }
 }

 const selectSubtopic = (topic: ForumTopic) => {
    if(selectedSubtopic.value != topic){
        selectedSubtopic.value = topic;

        //get forum posts here
    }
 }
</script>

<template>
    <div class="flex gap-8 h-[28rem]">
        <RouterLink to="" class="flex basis-2/3">
            <img class="rounded-[1.2rem] h-full w-full object-cover" src="@/assets/images/forum-card-img.png" alt="">
        </RouterLink>
        <RouterLink to="" class="flex basis-1/3">
            <img class="rounded-[1.2rem] h-full w-full object-cover" src="@/assets/images/forum-card-img.png" alt="">
        </RouterLink>
    </div>
    <div>
        <h2 class="my-8 text-24 font-semibold">Forum Discussions</h2>
        <div class="flex gap-4">
            <button
            v-for="topic in topics"
            :key="topic.name"
            :class="[
            'flex justify-center rounded-[2rem] p-[1.2rem] min-w-[9rem] text-14 font-medium text-gray-650',
            selectedTopic?.name === topic.name ? 'bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-white' : 'bg-transparent'
            ]"
            @click="selectTopic(topic)">
            
            {{ topic.name }}
        </button>
        </div>
        <div v-if="selectedTopic !== undefined && selectedTopic.subtopics !== undefined && selectedTopic.subtopics.length > 0" class="flex items-center gap-4 mt-[1.4rem]">
            <h4 class="text-16 font-medium">Sub Topics</h4>
            <button
            v-for="subtopic in selectedTopic.subtopics"
            :key="subtopic.name"
            :class="[
            'flex justify-center rounded-[2rem] p-[1.2rem] min-w-[9rem] text-14 font-medium text-gray-650',
            selectedSubtopic?.name === subtopic.name ? 'bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-white' : 'bg-transparent'
            ]"
            @click="selectSubtopic(subtopic)">
            {{ subtopic.name }}
        </button>
        </div>
        <div class="grid gap-y-[3.2rem] gap-x-[3rem] grid-cols-1 mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <ForumTopic v-for="discussion in forumDiscussions" :key="discussion.id"></ForumTopic>
        </div>
    </div>
    <RouterLink to="" class="flex mt-[3.2rem] h-[28rem]">
        <img class="rounded-[1.2rem] h-full w-full object-cover" src="@/assets/images/forum-card-img.png" alt="">
    </RouterLink>
</template>