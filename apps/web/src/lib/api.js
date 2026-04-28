const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

async function parseResponse(response) {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.message || "Request failed";
    throw new Error(message);
  }
  return payload.data;
}

export async function fetchPlatformOverview() {
  const response = await fetch(`${API_BASE_URL}/api/public/platform/overview`, {
    next: { revalidate: 60 }
  });
  return parseResponse(response);
}

export async function submitDemoRequest(body) {
  const response = await fetch(`${API_BASE_URL}/api/public/demo-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return parseResponse(response);
}

export async function loginAdmin(body) {
  const response = await fetch(`${API_BASE_URL}/api/admin/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return parseResponse(response);
}

export async function fetchAdminDemoRequests(token) {
  const response = await fetch(`${API_BASE_URL}/api/admin/demo-requests`, {
    headers: {
      "X-Admin-Token": token
    },
    cache: "no-store"
  });
  return parseResponse(response);
}

export async function fetchAdminModules(token) {
  const response = await fetch(`${API_BASE_URL}/api/admin/modules`, {
    headers: {
      "X-Admin-Token": token
    },
    cache: "no-store"
  });
  return parseResponse(response);
}

