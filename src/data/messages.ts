export type MessageType = 'sent-messages' | 'pending-responses' | 'important-messages';

export interface Message {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  avatarUrl?: string;
  type: MessageType;
}

export const mockMessages: Message[] = [
  { id: '1', name: 'Alice', lastMessage: 'Hey, did you see the update?', time: '2h ago', unread: true, type: 'sent-messages' },
  { id: '2', name: 'Bob', lastMessage: 'I sent the report.', time: '1h ago', type: 'pending-responses' },
  { id: '3', name: 'Charlie', lastMessage: 'Important: check this ASAP', time: '3h ago', unread: true, type: 'important-messages' },
  { id: '4', name: 'Dana', lastMessage: 'All done!', time: '30m ago', type: 'sent-messages' },
];