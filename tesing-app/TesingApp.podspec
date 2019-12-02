
  Pod::Spec.new do |s|
    s.name = 'TesingApp'
    s.version = '0.0.1'
    s.summary = 'this is for testing'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Dev-Phani/testplugin.git'
    s.author = 'techie'
    s.source = { :git => 'https://github.com/Dev-Phani/testplugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end