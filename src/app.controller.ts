import { Controller, Req, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { SetMetadata } from '@nestjs/common';
const PushNotifications = require("@pusher/push-notifications-server");
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata("IS_PUBLIC_KEY", true);
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1529562",
  key: "c42effe9f372fa675e24",
  secret: "5b4b8ece41f6129d417e",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello worldtyssyyyyyyyggggyyy"
});
// let beamsClient = new PushNotifications({
//   instanceId: "89d9dacf-6301-4514-981b-ccd99c95f657",
//   secretKey: "2A6209A3E132916FD215F82F45E14C14F5768987EA28F800EDBDE4B2F795E31E",
// });

// beamsClient
//   .publishToInterests(["hello"], {
//     web: {
//       notification: {
//         title: "Helloo",
//         body: "Hello, world!",
//         deep_link: "https://www.pusher.com",
//       },
//     },
//   })
//   .then((publishResponse) => {
//     console.log("Just published:", publishResponse.publishId);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
@Controller()
export class AppController {
  constructor(private authService: AuthService) { }
  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}