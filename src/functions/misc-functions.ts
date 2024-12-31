import { preferredTokens } from "@/constants/addresses/preferred-tokens";
import { errorCode } from "@/lib/metamask-error-codes";

export const retrievePreferredToken = (tokenAddress: string) => {
  const token = preferredTokens.find(({ address }) => address === tokenAddress);
  return token ? token : preferredTokens[0];
}

export const calculateTimeLeft = (timestamp: number) => {
  let difference = timestamp * 1000 - Date.now();

  if (timestamp * 1000 < Date.now())
    return { completed: true, isLoading: false };

  if (difference > 0) {
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0'
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0'
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        '0'
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      completed: false,
      isLoading: false,
    };
  }

  return {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: true,
  };
};

export const truncateValue = (valueToTruncate: any, decimalPlaces: number) => {
  const truncated =
    Math.trunc(valueToTruncate * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);

  return truncated;
};

export const convertToDecimalValue = (SCValue: any, tokenDecimal: number) => {
  return SCValue / Math.pow(10, Number(tokenDecimal));
};

export const copyToClipboard = async (textToCopy: any) => {
  navigator.clipboard.writeText(textToCopy);
  return true;
};

export const extractErrorMessage = (error: any) => {
  // Check for specific contract revert error
  if (error?.data?.message) {
    return error.data.message;
  }
  
  // Check for error message in the error object
  if (error?.message) {
    // Look for the revert reason in the error message
    const match = error.message.match(/reason="([^"]+)"/);
    if (match) {
      return match[1];
    }
    
    // If the error message is in a different format
    const match2 = error.message.match(/execution reverted: (.*?)(?:\n|$)/);
    if (match2) {
      return match2[1];
    }
  }
  
  // Fallback to MetaMask error codes
  return errorCode[error?.code as keyof typeof errorCode] || error?.code || "Transaction failed";
};