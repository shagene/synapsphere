# SynapSphere: Interactive Drag-and-Drop Quiz Platform

## Overview

SynapSphere is a web-based, drag-and-drop quiz platform developed by SemperTech Solutions. It offers an engaging and interactive way for users to learn and test their knowledge across various subjects. The platform supports both registered users and guest access, with a tiered system for functionality and monetization.

## Core Functionality

### User Access Modes
- Registered User: Full access to all features
- Guest User: Limited access with ad-supported experience

### Drag-and-Drop Quiz Interface
- Interactive drag-and-drop functionality for matching questions with answers
- Support for image-based questions and answers
- Immediate feedback on correct and incorrect matches

### Quiz Creation and Management (Registered Users Only)
- User-friendly interface for creating custom drag-and-drop quizzes
- Ability to add images for questions and answers
- Option to set time limits for quizzes

### User Authentication
- Secure signup and login process using Supabase for registered users
- "Continue as Guest" option for users who want to try the platform without signing up
- Password reset functionality for registered users

### Tiered Access Model
- Guest Users:
  * Limited number of quizzes per session (e.g., 3-5)
  * Ad-supported experience
  * Basic progress tracking (session-based)
- Registered Users:
  * Unlimited quizzes
  * Ad-free experience
  * Advanced progress tracking and analytics
  * Ability to create and save custom quizzes

### Progress Tracking
- Basic statistics on quiz performance (Guest Users - session-based)
- Detailed analytics and insights (Registered Users)

## Technical Requirements

1. Frontend Framework
   - Next.js for the main application framework
   - Shadcn UI for pre-built, customizable React components
   - Radix UI for accessibility-focused UI primitives

2. State Management and Data Fetching
   - TanStack Query (React Query) for state management and data fetching
   - Implement `ReactQueryStreamedHydration` for server-side rendering support

3. Backend and Database
   - Supabase for user authentication and data storage
   - Implement Row Level Security for data protection
   - Anonymous sessions for guest users

4. Performance Optimization
   - Utilize TanStack Query's caching capabilities
   - Implement lazy loading and code splitting
   - Optimize for mobile responsiveness

5. Ad Integration
   - Implement a third-party ad service for displaying ads to guest users

6. Accessibility
   - Ensure WCAG 2.1 AA compliance
   - Implement keyboard navigation for drag-and-drop functionality

## User Interface Components

### Landing Page
- Overview of SynapSphere features
- Options for "Sign Up", "Log In", and "Continue as Guest"
- "Request More Info" option

### Dashboard
- Quick access to recent quizzes
- Progress overview (session-based for guests, persistent for registered users)
- Upgrade prompts for guest users

### Quiz Taking Page
- Interactive drag-and-drop quiz interface
- Timer (if enabled)
- Immediate feedback system
- Ad display for guest users

### Results Page
- Display of quiz results and correct answers
- Performance analytics (basic for guests, detailed for registered users)
- Call-to-action for guests to register for full access

### User Profile Page (Registered Users Only)
- Account settings
- Persistent progress tracking

### Admin Page
- User management
- Quiz moderation tools
- Analytics dashboard

## Development Phases

1. Phase 1: MVP Development
   - Implement basic drag-and-drop quiz functionality
   - Set up user authentication with Supabase, including guest access
   - Develop the landing page and basic user/guest dashboard
   - Integrate TanStack Query for data fetching and state management

2. Phase 2: Core Feature Implementation
   - Expand quiz types and features
   - Implement the tiered model (guest vs. registered users)
   - Develop detailed analytics for registered users
   - Optimize TanStack Query usage for improved performance

3. Phase 3: Monetization and Scaling
   - Integrate ad system for guest users
   - Implement upgrade prompts and registration flow from guest to full user
   - Optimize performance and user experience
   - Refine TanStack Query implementation for large-scale data management

By focusing on these requirements and functionalities, SynapSphere aims to provide an engaging, effective, and monetizable drag-and-drop quiz platform that leverages TanStack Query for efficient state management and data fetching, while using Supabase for authentication and data storage.

Citations:
[1] https://supabase.com/blog/react-query-nextjs-app-router-cache-helpers
[2] https://blog.logrocket.com/using-tanstack-query-next-js/
[3] https://tanstack.com/query/latest/docs/framework/react/examples/nextjs?from=reactQueryV3
[4] https://github.com/Arcuity-ai/dragonglass
[5] https://fraserws.dev/blog/React-Query_Next-13
[6] https://codevoweb.com/using-react-query-with-supabase-in-next-js-app-router/
[7] https://tanstack.com/query/v5/docs/framework/react/guides/advanced-ssr
[8] https://eightify.app/media/how-to-use-tanstack-query-v5-in-next-js-14-for-efficient-api
[9] https://makerkit.dev/blog/saas/supabase-react-query
[10] https://tanstack.com/query/v3/docs/framework/react/examples/nextjs
[11] https://stackoverflow.com/questions/78326109/tanstack-query-shadcn-how-to-show-a-toast-msg-if-a-new-row-is-added-to-my-da
[12] https://dev.to/igorfilippov3/build-a-crud-app-in-react-with-tanstack-query-and-material-ui-final-gda
[13] https://dev.to/ankitjey/the-magic-of-react-query-and-supabase-1pom
[14] https://github.com/TanStack/query/discussions/5661
[15] https://tanstack.com/query/v4/docs/framework/react/guides/queries