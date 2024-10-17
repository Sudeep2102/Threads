import { defineConfig } from 'vite'; // Ensure this line is present
import react from '@vitejs/plugin-react'; // React plugin

export default defineConfig({
	plugins: [react()],
	server: {
	  port: 3000,
	  proxy: {
		"/api": {
		  target: "http://localhost:5000",
		  changeOrigin: true,
		  secure: false,
		},
	  },
	},
});
