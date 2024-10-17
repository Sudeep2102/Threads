export default defineConfig({
	plugins: [react()],
	server: {
	  port: 3000,
	  proxy: {
		"/api": {
		  target: "http://backend:5000",
		  changeOrigin: true,
		  secure: false,
		},
	  },
	},
  });
  