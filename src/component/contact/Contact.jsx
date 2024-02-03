import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl rounded-md mx-auto text-center bg-gray-900 text-white  p-4 relative">
      <div className=" mx-auto mt-8 text-center">
        <h2 className="text-4xl font-semibold mb-4">Contact</h2>
        <p className="  mb-4">
          Description: Thanks for stopping by! If you have any questions or just
          want to say hello, feel free to reach out.
        </p>

        <div className="flex  mx-auto items-center justify-center">
          <div className="mb-2">
            <span className="font-bold">📧 Email:</span> your.email@example.com
          </div>
          <div className="mb-2">
            <span className="font-bold">📞 Phone:</span> +1 (555) 123-4567
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 m-auto">
          <span className="font-bold mb-2">
            Connect with me on social media:
          </span>
          <div className="flex gap-6 flex-wrap">
            <a
              href="https://twitter.com/your_twitter_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/your_instagram_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
            >
              Instagram
            </a>
          </div>
          {/* Add links to other social media profiles as needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
