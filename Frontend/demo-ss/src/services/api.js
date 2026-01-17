// API Configuration
const API_BASE_URL = 'http://localhost:4000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();
  
  const config = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: 'include',
    mode: 'cors',
    ...options,
  };

  // Remove headers from options to avoid duplication
  if (options.headers) {
    config.headers = { ...config.headers, ...options.headers };
  }

  try {
    console.log('Making API request to:', url);
    console.log('Request config:', config);
    
    const response = await fetch(url, config);
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Response data:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication API
export const authAPI = {
  // Register new user
  register: async (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  // Get current user profile
  getProfile: async () => {
    return apiRequest('/auth/profile');
  },

  // Update user profile
  updateProfile: async (profileData) => {
    return apiRequest('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },
};

// Enquiries API
export const enquiriesAPI = {
  // Create new enquiry
  create: async (enquiryData) => {
    return apiRequest('/enquiries', {
      method: 'POST',
      body: JSON.stringify(enquiryData),
    });
  },

  // Get all enquiries (admin only)
  getAll: async () => {
    return apiRequest('/enquiries');
  },
};

// Courses API
export const coursesAPI = {
  // Get all courses
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/courses?${queryParams}` : '/courses';
    return apiRequest(endpoint);
  },

  // Get single course
  getById: async (id) => {
    return apiRequest(`/courses/${id}`);
  },

  // Create course (teacher/admin only)
  create: async (courseData) => {
    return apiRequest('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  },

  // Update course (instructor/admin only)
  update: async (id, courseData) => {
    return apiRequest(`/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(courseData),
    });
  },

  // Enroll in course
  enroll: async (id) => {
    return apiRequest(`/courses/${id}/enroll`, {
      method: 'POST',
    });
  },

  // Get enrolled courses for user
  getEnrolled: async () => {
    return apiRequest('/courses/user/enrolled');
  },
};

// Announcements API
export const announcementsAPI = {
  // Get all announcements
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/announcements?${queryParams}` : '/announcements';
    return apiRequest(endpoint);
  },

  // Get single announcement
  getById: async (id) => {
    return apiRequest(`/announcements/${id}`);
  },

  // Create announcement (teacher/admin only)
  create: async (announcementData) => {
    return apiRequest('/announcements', {
      method: 'POST',
      body: JSON.stringify(announcementData),
    });
  },

  // Update announcement (author/admin only)
  update: async (id, announcementData) => {
    return apiRequest(`/announcements/${id}`, {
      method: 'PUT',
      body: JSON.stringify(announcementData),
    });
  },

  // Delete announcement (author/admin only)
  delete: async (id) => {
    return apiRequest(`/announcements/${id}`, {
      method: 'DELETE',
    });
  },
};

// Utility functions
export const utils = {
  // Store auth token
  setAuthToken: (token) => {
    localStorage.setItem('token', token);
  },

  // Remove auth token
  removeAuthToken: () => {
    localStorage.removeItem('token');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getAuthToken();
  },

  // Get user role from token (basic implementation)
  getUserRole: () => {
    const token = getAuthToken();
    if (!token) return null;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    } catch (error) {
      console.error('Error parsing token:', error);
      return null;
    }
  },
};

export default {
  authAPI,
  enquiriesAPI,
  coursesAPI,
  announcementsAPI,
  utils,
};