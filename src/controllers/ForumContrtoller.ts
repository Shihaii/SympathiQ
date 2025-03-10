import axios from "axios"
import type { ForumDiscussion, ForumTopic } from "@/types"
import { forumDiscussionsMock } from "@/utility/noAPI/forumDiscussionsMock"
import { forumTopicsMock } from "@/utility/noAPI/forumTopicsMock"

const baseUrl = import.meta.env.VITE_API_URL

export const getForumDiscussions = async (): Promise<ForumDiscussion[] | void> => {
  let forumDiscussions : ForumDiscussion[] = [];
    await axios
      .get(`${baseUrl}/forumDiscussions`)
      .then((response: { data: ForumDiscussion[] }) => {
        // return response.data;

        //return forumDiscussionsMock because no API is available
        forumDiscussions = forumDiscussionsMock;
      })
      .catch((error) => {
      console.log(error)
      })
      return forumDiscussions;
  }

  export const getTopics = async (): Promise<ForumTopic[] | void> => {
    let topics : ForumTopic[] = [];
      await axios
        .get(`${baseUrl}/forumTopics`)
        .then((response: { data: ForumTopic[] }) => {
          // return response.data;
  
          //return forumDiscussionsMock because no API is available
          topics = forumTopicsMock;
        })
        .catch((error) => {
        console.log(error)
        })
        return topics;
    }


