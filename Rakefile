# Requirements
require 'rake'       # For the rake tasks
require 'yaml'       # For reading the configuration file
require 'fileutils'  # For creating recursive directories

# Load the configuration file
config = YAML.load_file("_config.yml")

# Set "rake build" as default task
task :default => :build

# rake post["Post title"]
desc "Create a post in the _posts directory"
task :post, :title do |t, args|
  title = args[:title]
  template = config["post"]["template"]
  extension = config["post"]["extension"]
  editor = config["editor"]
  if title.nil? or title.empty?
    raise "Please add a title to your post."
  end
  date = Time.now.strftime("%Y-%m-%d")
  filename = "#{date}-#{title.gsub(/[^[:alnum:]]+/, "-").downcase}.#{extension}"
  content = File.read(template)
  File.open("_posts/#{filename}","w") { |file|
    file.puts("#{content.gsub("title:", "title: #{title}")}") }
  puts "#{filename} was created."
  unless editor.nil? or editor.empty?
    system "#{editor} _posts/#{filename}"
  end
end

# rake page["Page title"]
# rake page["Page title","Path/to/folder"]
desc "Create a page (with an optional filepath)"
task :page, :title, :path do |t, args|
  title = args[:title]
  filepath = args[:path]
  template = config["page"]["template"]
  extension = config["page"]["extension"]
  editor = config["editor"]
  if title.nil? or title.empty?
    raise "Please add a title to your page."
  end
  if filepath.nil? or filepath.empty?
    filepath = "./"
  else
    FileUtils.mkdir_p("#{filepath}") unless File.exists?("#{filepath}")
  end
  filename = "#{title.gsub(/[^[:alnum:]]+/, "-").downcase}.#{extension}"
  content = File.read(template)
  File.open("#{filepath}/#{filename}","w") { |file|
    file.puts("#{content.gsub("title:", "title: #{title}")}") }
  puts "#{filename} was created in #{filepath}."
  unless editor.nil? or editor.empty?
    system "#{editor} #{filepath}/#{filename}"
  end
end

# rake build
# rake build[number]
desc "Generate the site (with an optional post limit)"
task :build, :number do |t, args|
  number = args[:number]
  if number.nil? or number.empty?
    system "jekyll --auto --server"
  else
    system "jekyll --auto --server --limit_posts=#{number}"
  end
end

# rake preview
desc "Launch a preview of the site in the browser"
task :preview do
  require 'Launchy'  # For launching the browser
  puts "Launching browser for preview..."
  sleep 2 #seconds
  Launchy.open("http://localhost:4000")
  Rake::Task[:build].invoke
end

# rake transfer[command]
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

# rake deploy["Commit message"]
desc "Deploy the site to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]
  if message.nil?
    system "git add ."
    system "git commit -m \"Updated.\""
    system "git push origin master"
    puts "The site was deployed."
  else
    system "git add ."
    system "git commit -m \"#{message}\""
    system "git push origin master"
    puts "The site was deployed."
  end
end
