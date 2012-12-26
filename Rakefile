# For the configuration
require 'yaml'

# Load the configuration file
config = YAML.load_file("_config.yml")

# Set build as default
task :default => :build

# rake build or rake build[number]
desc "Generate the site (with an optional post limit)"
task :build, :number do |t, args|
  number = args[:number]
  if number.nil?
    system "jekyll --auto --server"
  else
    system "jekyll --auto --server --limit_posts=#{number}"
  end
end

# rake post["Post title"]
desc "Create a post in the _posts directory"
task :post, :title do |t, args|
  title = args[:title]
  template = config["post"]["template"]
  extension = config["post"]["extension"]
  date = Time.now.strftime("%Y-%m-%d")
  if title.nil?
    raise "Please add a title to your post."
  else
    filename = "#{date}-#{title.gsub(/\s/, "-").downcase}.#{extension}"
    content = File.read(template)
    File.open("_posts/#{filename}","w") { |file|
      file.puts("#{content.gsub("title:", "title: #{title}")}") }
    puts "#{filename} was created."
  end
end

# rake transfer
desc "Transfer the _site directory to it's local git repository"
task :transfer, :command do |t, args|
  command = args[:command]
  robocopy_settings = config["transfer"]["robocopy"]
  rsync_settings = config["transfer"]["rsync"]
  if command.nil?
    raise "Please choose a file transfer command."
  elsif command == "robocopy"
    system "robocopy #{robocopy_settings}"
    puts "The _site directory was transfered."
  elsif command == "rsync"
    system "rsync #{rsync_settings}"
    puts "The _site directory was transfered."
  else
    raise "#{command} isn't a valid file transfer command."
  end
end