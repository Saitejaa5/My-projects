export interface MessageType {
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  recommendations?: string[];
  disclaimer?: string;
}

export interface HealthResponse {
  content: string;
  recommendations?: string[];
  disclaimer?: string;
}