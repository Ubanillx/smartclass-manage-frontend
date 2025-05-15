/**
 * IP地址工具函数
 */

/**
 * 获取用户IP地址
 * 使用ipify API获取用户IP地址
 * @returns Promise<string> 返回IP地址
 */
export const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('获取用户IP地址失败:', error);
    return '';
  }
};

/**
 * 获取用户地理位置信息
 * 使用IP获取地理位置信息的API
 * @param ip IP地址
 * @returns Promise<{city: string, country: string}> 返回城市和国家信息
 */
export const getLocationByIP = async (ip: string): Promise<{ city: string; country: string }> => {
  if (!ip) {
    return { city: '', country: '' };
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return {
      city: data.city || '',
      country: data.country_name || '',
    };
  } catch (error) {
    console.error('获取地理位置信息失败:', error);
    return { city: '', country: '' };
  }
}; 