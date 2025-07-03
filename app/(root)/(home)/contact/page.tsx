"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <>
      {/* <section className=" flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-muted-foreground">
          Let&apos;s Talk
        </h3>
        <p className="text-lg  mt-3 text-muted-foreground">
          Whether you’re looking to rent high-quality lighting for your next
          production, event, movie, or show, I’m here to help.
        </p>
        <div className="container flex justify-center items-center h-20">
          <Button onClick={() => router.push("https://mail.google.com/mail")}>
            Contact Us
          </Button>
        </div>
      </section> */}
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Whether you’re looking to rent high-quality lighting for your next
            production, event, movie, or show, I’m here to help.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@rental.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a Message..."
                defaultValue={""}
              />
            </div>
            <div className="flex justify-between">
              <Button
                type="button"
                variant={"link"}
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }}
                // className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </Button>
              <Button
                variant={"link"}
                type="button"
                onClick={() => router.push("https://mail.google.com/mail")}
              >
                Talk on Gmail
                <p className="pl-3">
                  {" "}
                  {/* <MailQuestion /> */}
                  <Image
                    alt="Gmail icon"
                    src="/images/gmail.png"
                    height={24}
                    width={24}
                  />
                </p>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
