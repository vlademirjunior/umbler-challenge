export default interface IStoreDomainDTO {
  name: string;
  time_to_live: number;
  ip_address?: string | undefined;
  whois?: string | undefined;
  web_hosting?: string | undefined;
}