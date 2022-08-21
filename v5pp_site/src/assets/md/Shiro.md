# Shiro Notes

#### 1, shiro认证中的关键对象

- Subject 主体

  访问系统的用户，主题可以是用户、程序等，进行认证的称为主体

- Principal 身份信息

  进行身份验证的标识，标识具有唯一性，一个主体可以有多个身份，但是必须只有一个主身份（primary principal）

- credential 凭证信息

  密码，证书等等

#### 2, Shiro认证流程

信息变成令牌（token）-> 判断是否合法

#### 3, Shiro认证实现

~~~java
public class TestAuthenticator{
    public static void main(String[] args){
        // 1. 创建安全管理器对象
        SecurityManager sm = new DefaultSecurityManager();
        // 2. 给安全管理器设置Realm
        sm.setRealm(new IniRealm("path_to_ini"));
        // 3. 给全局安全工具类设置安全管理器
        SecurityUtils.setSecurityManager(sm);
        // 4. 关键对象 subject 主体
        Subject subject = SecurityUtils.getSubject();
        // 5. 创建令牌
        UsernamePasswordToken token = new UsernamePasswordToken("username", "password");
        // 6. 认证
        try{
            System.out.println("认证状态" + subject.isAuthenticated());
            subject.login(token);
            System.out.println("认证状态" + subject.isAuthenticated());
        }catch(UnknownAccountException e){
            e.printStackTrace();
            System.out.println("用户不存在");
        }catch(IncorrectCredentialsExcept e){
            e.printStackTrace();
            System.out.println("密码错误");
        }
    }
}
~~~

#### 4, 自定义 Realm 实现

自定义 Realm 通过

实现 AuthencatingRealm 实现认证（doGetAuthenticationInfo)，

实现 AuthorizingRealm 实现授权（doGetAuthorizationInfo）

~~~java
public class CustomRealm extends AuthorizingRealm throws AuthenticationException{
    // 授权
    @override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals){
        return null;
    }
    
    // 认证
    @override
    protected AuthencationInfo doGetAuthenticationInfo(AuthenticaitonToken token){
        // 在token中获取用户名
        String principal = (String) token.getPrincipal();
        // 根据身份信息使用工具查询心爱公关数据库
        // 参数1：数据库中的用户名，参数2：密码，参数3：Realm名称
        if("username".equals(principal)){
            return new SimpleAuthenticationInfo(principal, password, this.getName());
        }
    }
}
~~~

#### 5, Salt 和 MD5 实现

1. ###### MD5

   作用为加密或者签名（校验和）

   算法不可逆

2. ###### Salt

   做MD5前加入随机字符串

3. ###### Shiro 实现

   加密介绍

    ~~~java
    public class TestShiroMD5{
        public static void main(String[] args){
            // 参数1：密码
            Md5Hash md1 = new Md5Hash("123");
            // 参数1：密码，2：盐
            Md5Hash md2 = new Md5Hash("123", "x057sx");
            // 参数1：密码，2：盐 3：hash散列次数
            Md5Hash md2 = new Md5Hash("123", "x057sx"， "1024");
        }
    }
    ~~~

   主类

    ~~~java
    public class TestAuthenticator{
        public static void main(String[] args){
            // 1. 创建安全管理器对象
            SecurityManager sm = new DefaultSecurityManager();
            // 2. 给安全管理器设置Realm
            Md5Realm realm = new Md5Realm();
            HashedCrentialMatcher cm = new HashedCrentialMatcher();
            cm.setHashAlgorithmName("md5");
            realm.setCredentialsMatcher(cm);
            sm.setRealm(mdm);
            
            // 3. 给全局安全工具类设置安全管理器
            SecurityUtils.setSecurityManager(sm);
            // 4. 关键对象 subject 主体
            Subject subject = SecurityUtils.getSubject();
            // 5. 创建令牌
            UsernamePasswordToken token = new UsernamePasswordToken("username", "password");
            // 6. 认证
            try{
                System.out.println("认证状态" + subject.isAuthenticated());
                subject.login(token);
                System.out.println("认证状态" + subject.isAuthenticated());
            }catch(UnknownAccountException e){
                e.printStackTrace();
                System.out.println("用户不存在");
            }catch(IncorrectCredentialsExcept e){
                e.printStackTrace();
                System.out.println("密码错误");
            }
        }
    }
    ~~~

   认证

    ~~~java
    public class Md5Realm extends AuthorizingRealm throws AuthenticationException{
        // 授权
        @override
        protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals){
            return null;
        }
        
        // 认证
        @override
        protected AuthencationInfo doGetAuthenticationInfo(AuthenticaitonToken token){
            // 在token中获取用户名
            String principal = (String) token.getPrincipal();
            // 根据数据库查询
            if("username".equals(principal)){
                return new SimpleAuthenticationInfo(principal, "123", this.getName());
            }
        }
    }
    ~~~

#### 6, 授权

RBAC:

~~~java
if(subject.hasRole("admin:method:entity")){
    //operation
}
~~~

Shiro授权3种方式：

- 编程式
- 注解式
- 标签式

~~~java
public class TestAuthenticator{
    public static void main(String[] args){
        // 1. 创建安全管理器对象
        SecurityManager sm = new DefaultSecurityManager();
        // 2. 给安全管理器设置Realm
        Md5Realm realm = new Md5Realm();
        HashedCrentialMatcher cm = new HashedCrentialMatcher();
        cm.setHashAlgorithmName("md5");
        realm.setCredentialsMatcher(cm);
        sm.setRealm(mdm);
        
        // 3. 给全局安全工具类设置安全管理器
        SecurityUtils.setSecurityManager(sm);
        // 4. 关键对象 subject 主体
        Subject subject = SecurityUtils.getSubject();
        // 5. 创建令牌
        UsernamePasswordToken token = new UsernamePasswordToken("username", "password");
        // 6. 认证
        try{
            System.out.println("认证状态" + subject.isAuthenticated());
            subject.login(token);
            System.out.println("认证状态" + subject.isAuthenticated());
        }catch(UnknownAccountException e){
            e.printStackTrace();
            System.out.println("用户不存在");
        }catch(IncorrectCredentialsExcept e){
            e.printStackTrace();
            System.out.println("密码错误");
        }
        
        if(subject.isAuthenticated()){
            // 单角色权限控制
            System.out.println(subject.hasRole("admin"));
            // 多角色权限控制
            System.out.println(subject.hasAllRoles(Arrays.asList("admin","user")));
            // 是否有其中一个角色
            boolean[] booleans = subject.hasRoles(Arrays.asList("admin","user"));
            // 基于权限字符串的访问控制
            System.out.println(subject.isPermitted("user:*:*"));
        }
    }
}
~~~

Realm

~~~java
public class Md5Realm extends AuthorizingRealm throws AuthenticationException{
    // 授权
    @override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals){
        SimpleAuthorizationInfo sai = new SimpleAuthorizationInfo();
        sai.addRole("admin");
    }
    
    // 认证
    @override
    protected AuthencationInfo doGetAuthenticationInfo(AuthenticaitonToken token){
        // 在token中获取用户名
        String principal = (String) token.getPrincipal();
        // 根据数据库查询
        if("username".equals(principal)){
            return new SimpleAuthenticationInfo(principal, "123", this.getName());
        }
    }
}
~~~

#### 7, 整合 Spring-boot

filter调用manager，manager调用realm

~~~java
@Configuration
public class ShiroConfiguration {
    /**
     * 创建 Shiro Filter，负责拦截所有请求，方法名必须叫 shiroFilterFactoryBean
     */
    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean() {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        //给 Filter 设置 SecurityManager
        shiroFilterFactoryBean.setSecurityManager(getDefaultWebSecurityManager());

        Map<String, String> map = new HashMap<String, String>();
        // anon: 无需认证，可以访问
        // authc: 必须认证才可以访问
        // user: 如果使用rememberMe的功能可以直接访问
        // perms: 该资源必须得到资源权限才可以访问
        // role: 该资源必须得到角色权限才可以访问
        // logout: 注销
        // ssl: 如果是https，必须放在https的请求路径上，否则会报错
        // 配置系统受限资源
        map.put("/login.jsp", "anon");
        map.put("/register.jsp", "anon");
        map.put("/**", "authc");
        // 配置系统公共资源

        // 配置登录页面
        // 不写下一行默认跳转到 login.jsp，也可以设置成其他页面
        shiroFilterFactoryBean.setLoginUrl("/login.jsp");

        shiroFilterFactoryBean.setFilterChainDefinitionMap(map);

        return shiroFilterFactoryBean;
    }

    /**
     * 创建 SecurityManager，负责管理所有的 Subject
     */
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager() {
        DefaultWebSecurityManager defaultWebSecurityManager = new DefaultWebSecurityManager();
        //给 SecurityManager 设置 Realm
        defaultWebSecurityManager.setRealm(getRealm());
        return defaultWebSecurityManager;
    }

    /**
     * 创建 Realm，负责认证和授权
     */
    @Bean
    public CustomRealm getRealm() {

        return new CustomRealm();
    }
}
~~~

#### 8，整合 Redis

