import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface StatData {
  name: string;
  value: number;
  label: string;
}

export interface Professor {
  name: string;
  role: string;
  image: string;
  description: string[];
}