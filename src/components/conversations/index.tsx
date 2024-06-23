'use client';
import React from 'react';
import { string } from 'zod';
import TabsMenu from '../tabs';
import { TABS_MENU } from '@/constants/menu';
import { TabsContent } from '../ui/tabs';
import ConversationSearch from './search';
import { useConversation } from '@/hooks/conversations/use-conversation';
import { Loader } from '../loader';
import ChatCard from './chat-card';
import { CardDescription } from '../ui/card';

type Props = {
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages } =
    useConversation();
  //WIP:create a hook,to get starred,expiredz and all chats for domains.
  return (
    <div className="px-0 py-3">
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread">
          <ConversationSearch domains={domains} register={register} />
          <div className="flex flex-col">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => (
                  <ChatCard
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    key={room.chatRoom[0].id}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))
              ) : (
                <CardDescription>No chats for you domain</CardDescription>
              )}
            </Loader>
          </div>
        </TabsContent>
      </TabsMenu>
    </div>
  );
};

export default ConversationMenu;
