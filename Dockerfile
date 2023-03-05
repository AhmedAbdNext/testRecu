# Use the official Nginx image as the base image
FROM nginx

# Copy the Webpack output directory to the appropriate location within the Nginx image
COPY ./dist /usr/share/nginx/html

# Expose port 80 for incoming HTTP traffic
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]