const API_URL =
    "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnSvVj7cMS4uDaJ46FzwMtxxkGss7bd5-QoRwDLKj1lbsSCxh12MIGdloMjHHRbSsIJhfDjpnmkx0a0x86xAz8h01nN9ZmXYe4zTYjDivPdNgmtMjz8xbX1pIO5GI32XVPRFDjExG11gAwQduZSva9tCa9waZMXlw4aSzNlETIsbENttKHdcnGZkByVAAxDuC4hiyzGC5raetkXr0ZliQ1Q8Ffa1CLf5Z7xDffkgXU5k5yfd3WGUNkOteJBsJEdi57IfmQuaXSY-92zlWw9vjCY6O3tdLw&lib=MDYCDUkCPqA7uzgmXekSgCvmkEwggHGpX";

export async function getTeamMembers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch team members.");
    }

    return response.json();
}
